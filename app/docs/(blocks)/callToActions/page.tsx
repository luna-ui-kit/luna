import { Metadata } from 'next'
import { Overview } from './_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Call To Actions',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/callToActions'
  }
}

export default function Page() {
  return <Overview />
}
