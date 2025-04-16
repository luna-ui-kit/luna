import { Metadata } from 'next'
import { TypographySection } from './_components/_section'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Typography',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/typography'
  }
}

export default function Page() {
  return <TypographySection />
}
