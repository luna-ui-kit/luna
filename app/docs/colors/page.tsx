import { Metadata } from 'next'
import { ColorsSection } from './_components/_section'

export const metadata: Metadata = {
  title: 'Luna | Colors',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/colors'
  }
}

export default function Page() {
  return <ColorsSection />
}
