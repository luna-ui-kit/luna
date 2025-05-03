import { Metadata } from 'next'
import { Overview } from './_components/_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Homepage',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/homepage'
  }
}

export default function Page() {
  return <Overview />
}
