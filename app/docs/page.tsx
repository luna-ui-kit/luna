import { GettingStartedSection } from './(document)/_components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Docs',
  description: '🌔 Getting started',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs'
  }
}

export default function Page() {
  return <GettingStartedSection />
}
