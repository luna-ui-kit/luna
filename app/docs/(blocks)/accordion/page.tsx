import { Metadata } from 'next'
import { Overview } from './_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Accordion',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/accordion'
  }
}

export default function Page() {
  return <Overview />
}
