import { Metadata } from 'next'
import { Overview } from './_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Email Opt-in',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/emailOptIn'
  }
}

export default function Page() {
  return <Overview />
}
