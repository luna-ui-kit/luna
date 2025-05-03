import { Metadata } from 'next'
import { Overview } from './_components/_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Tag',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/tag'
  }
}

export default function Page() {
  return (
    <>
      <Overview />
    </>
  )
}
