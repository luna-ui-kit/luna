import { Metadata } from 'next'
import { IconsSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Icons',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/icons'
  }
}

export default function Page() {
  return <IconsSection />
}
