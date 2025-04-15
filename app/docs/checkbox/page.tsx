import { Metadata } from 'next'
import { Overview } from './_components/_overview'
import { Customize } from './_components/_customize'
import Code from './_components/_code'

export const metadata: Metadata = {
  title: 'Luna | Checkbox',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/checkbox'
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
