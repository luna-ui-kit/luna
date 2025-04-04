import { Metadata } from 'next'
import { ButtonSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Button',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/button'
  }
}

export default function Page() {
  return <ButtonSection />
}
