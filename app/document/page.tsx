import { GettingStartedSection } from './(document)/_components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luna | Document',
  description: '🌔 Getting started',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document'
  }
}

export default function Page() {
  return <GettingStartedSection />
}
