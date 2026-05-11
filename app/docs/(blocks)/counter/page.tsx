import { Metadata } from 'next'
import { Overview } from './_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Counter',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/counter'
  }
}

export default function Page() {
  return <Overview />
}
