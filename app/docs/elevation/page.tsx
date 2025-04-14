import { Metadata } from 'next'
import { ElevationSection } from './_components/_section'

export const metadata: Metadata = {
  title: 'Luna | Elevation',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/elevation'
  }
}

export default function Page() {
  return <ElevationSection />
}
