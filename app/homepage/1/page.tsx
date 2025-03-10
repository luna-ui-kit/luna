import type { Metadata } from 'next'
import { Navbar001 } from './_navbar_001'

export const metadata: Metadata = {
  title: 'Luna | Homepage 001',
  description: '...'
}

export default function Page() {
  return (
    <>
      <Navbar001 />
    </>
  )
}
