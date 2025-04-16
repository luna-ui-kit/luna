import { Metadata } from 'next'
import { Overview } from './_components/_overview'
import { Customize } from './_components/_customize'

export const metadata: Metadata = {
  title: 'Luna | Elevation',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/elevation'
  }
}

export default function Page() {
  return (
    <>
      <Overview />
      <Customize />
    </>
  )
}
