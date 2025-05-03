import { Metadata } from 'next'
import { Overview } from './_components/_overview'
import { Customize } from './_components/_customize'
import Code from './_components/_code'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Dialog',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/dialog'
  }
}

export default function Page() {
  return (
    <>
      <Overview />
      <Code />
      <Customize />
    </>
  )
}
