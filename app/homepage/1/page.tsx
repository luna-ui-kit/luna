import type { Metadata } from 'next'
import { Hero001, IconBox001, Navbar001 } from '@/luna/blocks'

export const metadata: Metadata = {
  title: 'Luna | Homepage 001',
  description: '...'
}

export default function Page() {
  return (
    <>
      <Navbar001 />
      <Hero001 />
      <IconBox001 />
    </>
  )
}
