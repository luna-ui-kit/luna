import { Metadata } from 'next'
import { Overview } from './_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Content',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/content'
  }
}

export default function Page() {
  return <Overview />
}
