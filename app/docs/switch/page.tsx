import { Metadata } from 'next'
import { SwitchSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Switch',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/switch'
  }
}

export default function Page() {
  return <SwitchSection />
}
