import type { Metadata } from 'next'
import {
  Content001,
  Hero001,
  IconBox001,
  Kickstart001,
  Navbar001
} from '@/luna/blocks'

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
      <Kickstart001 />
      <Content001 />
    </>
  )
}
