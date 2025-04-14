import { Metadata } from 'next'
import { IconsSection } from './_components/_section'

export const metadata: Metadata = {
  title: 'Luna | Icons',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/icons'
  }
}

export default function Page() {
  return <IconsSection />
}
