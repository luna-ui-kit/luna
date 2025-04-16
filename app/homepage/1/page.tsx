import type { Metadata } from 'next'
import {
  CallToAction001,
  Content001,
  Footer001,
  Hero001,
  IconBox001,
  Kickstart001,
  Navbar001
} from '@/luna/blocks'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Homepage 001',
  description: 'Homepage 001',
  alternates: {
    canonical: 'https://luna-ui-kit.com/homepage/1'
  }
}

export default function Page() {
  return (
    <>
      <Navbar001 />
      <Hero001 />
      <IconBox001 />
      <Kickstart001 />
      <Content001 />
      <CallToAction001 />
      <Footer001 />
    </>
  )
}
