import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Book Now | Noble Black Car Service NYC',
}

export default function BookingPage() {
  redirect('/quote')
}
