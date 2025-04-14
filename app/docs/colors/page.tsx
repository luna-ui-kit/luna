import { Metadata } from 'next'
import { ColorsSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Colors',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/colors'
  }
}

export default function Page() {
  return <ColorsSection />
}
