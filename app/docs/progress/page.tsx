import { Metadata } from 'next'
import { ProgressSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Progress',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/progress'
  }
}

export default function Page() {
  return <ProgressSection />
}
