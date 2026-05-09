import { CallToAction002 } from '@/luna/blocks/_callToAction'
import { Content002 } from '@/luna/blocks/_content'
import { Footer002 } from '@/luna/blocks/_footer'
import { Hero002 } from '@/luna/blocks/_hero'
import { IconBox002 } from '@/luna/blocks/_iconBox'
import { Kickstart002 } from '@/luna/blocks/_kickstart'
import { Navbar002 } from '@/luna/blocks/_navbar'
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
