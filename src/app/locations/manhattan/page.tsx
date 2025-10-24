import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Manhattan Black Car Service - All Neighborhoods | Noble',
  description: 'Black car service throughout Manhattan NYC. Midtown, Upper East Side, Upper West Side, Downtown, Financial District. 24/7 luxury transportation.',
  keywords: 'Manhattan car service, Midtown black car, Upper East Side limo, Manhattan transportation',
}

export default function ManhattanPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative h-[40vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Manhattan Car Service</h1>
          <p className="text-xl md:text-2xl">Luxury transportation throughout all Manhattan neighborhoods</p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-black">Neighborhoods We Serve</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Midtown</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Times Square</li>
              <li>• Herald Square</li>
              <li>• Grand Central</li>
              <li>• Penn Station</li>
              <li>• Bryant Park</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Upper East Side</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Carnegie Hill</li>
              <li>• Yorkville</li>
              <li>• Lenox Hill</li>
              <li>• Museum Mile</li>
              <li>• Central Park East</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Upper West Side</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Lincoln Center</li>
              <li>• Columbus Circle</li>
              <li>• Central Park West</li>
              <li>• Riverside Drive</li>
              <li>• Cathedral Parkway</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Downtown</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• SoHo</li>
              <li>• Tribeca</li>
              <li>• Greenwich Village</li>
              <li>• West Village</li>
              <li>• NoHo</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Financial District</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Wall Street</li>
              <li>• Battery Park City</li>
              <li>• Seaport</li>
              <li>• World Trade Center</li>
              <li>• Stone Street</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-xl mb-3 text-black">Chelsea & Flatiron</h3>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Chelsea</li>
              <li>• Flatiron District</li>
              <li>• Gramercy</li>
              <li>• Union Square</li>
              <li>• Madison Square</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-black">Services Throughout Manhattan</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4 text-black">Airport Transfers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• JFK Airport</li>
              <li>• LaGuardia Airport</li>
              <li>• Newark Airport</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 text-black">Point-to-Point Service</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Within Manhattan</li>
              <li>• To Brooklyn</li>
              <li>• To Queens</li>
              <li>• To other boroughs</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-700 mb-12">Contact us for flat-rate pricing from your Manhattan location</p>

        <div className="text-center">
          <Link href="https://book.mylimobiz.com/v4/nobleblackcar" className="bg-black text-white px-8 py-4 text-lg font-semibold inline-block hover:bg-gray-800">Get Manhattan Quote</Link>
        </div>
      </section>
    </main>
  )
}
