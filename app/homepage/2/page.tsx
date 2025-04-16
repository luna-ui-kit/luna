import {
  CallToAction002,
  Content002,
  Footer002,
  Hero002,
  IconBox002,
  Kickstart002,
  Navbar002
} from '@/luna/blocks'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Homepage 002',
  description: 'Homepage 002',
  alternates: {
    canonical: 'https://luna-ui-kit.com/homepage/2'
  }
}

export default function Page() {
  return (
    <>
      <Navbar002 />
      <Hero002 />
      <IconBox002 />
      <Kickstart002 />
      <Content002 />
      <CallToAction002 />
      <Footer002 />
    </>
  )
}
