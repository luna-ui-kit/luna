import { Metadata } from 'next'
import { TypographySection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Typography',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/typography'
  }
}

export default function Page() {
  return <TypographySection />
}
