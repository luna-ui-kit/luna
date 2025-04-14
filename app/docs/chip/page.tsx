import { Metadata } from 'next'
import { ChipSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Chip',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/chip'
  }
}

export default function Page() {
  return <ChipSection />
}
