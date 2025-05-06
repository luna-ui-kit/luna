import { Metadata } from 'next'
import { Overview } from './_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Blog Cards',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/blogCards'
  }
}

export default function Page() {
  return <Overview />
}
