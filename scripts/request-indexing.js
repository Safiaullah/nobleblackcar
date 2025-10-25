/**
 * Google Search Console Indexing Request Script
 *
 * This script helps you request indexing for all pages in your sitemap.
 *
 * PREREQUISITES:
 * 1. Install Google Search Console API client:
 *    npm install googleapis
 *
 * 2. Set up Google Cloud Project:
 *    - Go to https://console.cloud.google.com/
 *    - Create a new project or select existing one
 *    - Enable "Web Search Indexing API"
 *    - Create Service Account credentials
 *    - Download the JSON key file
 *
 * 3. Add service account to Google Search Console:
 *    - Go to https://search.google.com/search-console
 *    - Select your property
 *    - Settings > Users and permissions
 *    - Add the service account email as Owner
 *
 * 4. Save the credentials JSON file as: ./google-credentials.json
 *
 * USAGE:
 *    node scripts/request-indexing.js
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Configuration
const SITEMAP_URL = 'https://nobleblackcarservice.com/sitemap.xml';
const CREDENTIALS_PATH = path.join(__dirname, '../google-credentials.json');
const BATCH_SIZE = 10; // Number of URLs to request per batch
const DELAY_BETWEEN_BATCHES = 2000; // 2 seconds delay between batches

// Priority pages to index first (most important)
const HIGH_PRIORITY_URLS = [
  'https://nobleblackcarservice.com/',
  'https://nobleblackcarservice.com/services/airport-transfer',
  'https://nobleblackcarservice.com/airports/jfk',
  'https://nobleblackcarservice.com/airports/laguardia',
  'https://nobleblackcarservice.com/airports/newark',
  'https://nobleblackcarservice.com/services/corporate-shuttle',
  'https://nobleblackcarservice.com/services/executive-car-service',
  'https://nobleblackcarservice.com/fleet',
  'https://nobleblackcarservice.com/contact',
  'https://nobleblackcarservice.com/quote',
];

/**
 * Parse sitemap XML and extract URLs
 */
async function fetchSitemapUrls() {
  const https = require('https');

  return new Promise((resolve, reject) => {
    https.get(SITEMAP_URL, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // Extract all <loc> tags
        const urlMatches = data.match(/<loc>(.*?)<\/loc>/g);
        if (!urlMatches) {
          reject(new Error('No URLs found in sitemap'));
          return;
        }

        const urls = urlMatches.map(match =>
          match.replace('<loc>', '').replace('</loc>', '')
        );

        resolve(urls);
      });
    }).on('error', reject);
  });
}

/**
 * Initialize Google Search Console API client
 */
function getSearchConsoleClient() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error('❌ ERROR: Credentials file not found!');
    console.error(`   Expected location: ${CREDENTIALS_PATH}`);
    console.error('\n   Please follow the setup instructions in this file.');
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  return google.indexing({ version: 'v3', auth });
}

/**
 * Request indexing for a single URL
 */
async function requestIndexing(indexing, url) {
  try {
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    });

    return { url, success: true, response: response.data };
  } catch (error) {
    return { url, success: false, error: error.message };
  }
}

/**
 * Delay execution
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Google Search Console Indexing Request Script\n');
  console.log('📡 Fetching URLs from sitemap...');

  let urls;
  try {
    urls = await fetchSitemapUrls();
    console.log(`✅ Found ${urls.length} URLs in sitemap\n`);
  } catch (error) {
    console.error('❌ Error fetching sitemap:', error.message);
    process.exit(1);
  }

  // Prioritize high-priority URLs
  const highPriorityUrls = urls.filter(url => HIGH_PRIORITY_URLS.includes(url));
  const otherUrls = urls.filter(url => !HIGH_PRIORITY_URLS.includes(url));
  const sortedUrls = [...highPriorityUrls, ...otherUrls];

  console.log(`📊 Priority breakdown:`);
  console.log(`   High priority: ${highPriorityUrls.length} URLs`);
  console.log(`   Other pages: ${otherUrls.length} URLs\n`);

  console.log('🔐 Initializing Google Search Console API...');
  const indexing = getSearchConsoleClient();
  console.log('✅ API client initialized\n');

  console.log('📝 Starting indexing requests...\n');
  console.log('⚠️  NOTE: Google limits indexing requests. You can request up to 200 URLs per day.\n');

  const results = {
    success: [],
    failed: [],
  };

  // Process URLs in batches
  for (let i = 0; i < sortedUrls.length; i += BATCH_SIZE) {
    const batch = sortedUrls.slice(i, Math.min(i + BATCH_SIZE, sortedUrls.length));
    const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(sortedUrls.length / BATCH_SIZE);

    console.log(`📦 Batch ${batchNumber}/${totalBatches} (${batch.length} URLs):`);

    // Request indexing for each URL in the batch
    const batchResults = await Promise.all(
      batch.map(url => requestIndexing(indexing, url))
    );

    // Process results
    batchResults.forEach(result => {
      if (result.success) {
        console.log(`   ✅ ${result.url}`);
        results.success.push(result.url);
      } else {
        console.log(`   ❌ ${result.url} - ${result.error}`);
        results.failed.push({ url: result.url, error: result.error });
      }
    });

    // Delay between batches to avoid rate limiting
    if (i + BATCH_SIZE < sortedUrls.length) {
      console.log(`\n⏳ Waiting ${DELAY_BETWEEN_BATCHES / 1000}s before next batch...\n`);
      await delay(DELAY_BETWEEN_BATCHES);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully requested: ${results.success.length} URLs`);
  console.log(`❌ Failed: ${results.failed.length} URLs`);
  console.log(`📈 Success rate: ${((results.success.length / sortedUrls.length) * 100).toFixed(1)}%`);

  if (results.failed.length > 0) {
    console.log('\n❌ Failed URLs:');
    results.failed.forEach(({ url, error }) => {
      console.log(`   - ${url}`);
      console.log(`     Error: ${error}`);
    });
  }

  console.log('\n✨ Done! Check Google Search Console for indexing status.');
  console.log('   https://search.google.com/search-console');
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
