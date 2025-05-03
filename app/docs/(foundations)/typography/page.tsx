import { Metadata } from 'next'
import { Overview } from './_components/_overview'
import { Example } from './_components/_example'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Typography',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/typography'
  }
}

export default function Page() {
  return (
    <>
      <Overview />
      <Example />
    </>
  )
}
