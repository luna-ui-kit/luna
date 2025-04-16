import { Metadata } from 'next'
import { Overview } from './_components/_overview'
import Code from './_components/_code'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Icons',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/icons'
  }
}

export default function Page() {
  return (
    <>
      <Overview />
      <Code />
    </>
  )
}
