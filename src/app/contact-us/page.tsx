import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Contact Us | Noble Black Car Service NYC',
}

export default function ContactUsPage() {
  redirect('/contact')
}
