import { Metadata } from 'next'
import { ElevationSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Elevation',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/elevation'
  }
}

export default function Page() {
  return <ElevationSection />
}
