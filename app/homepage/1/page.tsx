import type { Metadata } from 'next'
import { Navbar001 } from './_navbar_001'
import { Hero001 } from '@/luna/blocks'

export const metadata: Metadata = {
  title: 'Luna | Homepage 001',
  description: '...'
}

export default function Page() {
  return (
    <>
      <Navbar001 />
      <Hero001 />
    </>
  )
}
