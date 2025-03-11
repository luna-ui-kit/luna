import { Hero002, IconBox002, Navbar002 } from '@/luna/blocks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luna | Homepage 002',
  description: '...'
}

export default function Page() {
  return (
    <>
      <Navbar002 />
      <Hero002 />
      <IconBox002 />
    </>
  )
}
