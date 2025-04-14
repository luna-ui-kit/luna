import { Metadata } from 'next'
import { AlertSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Alert',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/alert'
  }
}

export default function Page() {
  return <AlertSection />
}
