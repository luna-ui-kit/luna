import { CallToAction001 } from '@/luna/blocks/_callToAction'
import { Content001 } from '@/luna/blocks/_content'
import { Footer001 } from '@/luna/blocks/_footer'
import { Hero001 } from '@/luna/blocks/_hero'
import { IconBox001 } from '@/luna/blocks/_iconBox'
import { Kickstart001 } from '@/luna/blocks/_kickstart'
import { Navbar001 } from '@/luna/blocks/_navbar'
import type { Metadata } from 'next'

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
