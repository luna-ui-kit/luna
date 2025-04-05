import { Metadata } from 'next'
import { DividerSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Divider',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/divider'
  }
}

export default function Page() {
  return <DividerSection />
}
