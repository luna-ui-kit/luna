import { Metadata } from 'next'
import { HomepageSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Homepage',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/homepage'
  }
}

export default function Page() {
  return <HomepageSection />
}
