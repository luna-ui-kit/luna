import { Metadata } from 'next'
import { SwitchSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Switch',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/switch'
  }
}

export default function Page() {
  return <SwitchSection />
}
