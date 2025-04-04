import { Metadata } from 'next'
import { RatingSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Rating',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/rating'
  }
}

export default function Page() {
  return <RatingSection />
}
