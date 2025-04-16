import { Metadata } from 'next'
import { Overview } from './_components/_overview'
import { Customize } from './_components/_customize'
import { ColorPallete } from './_components/_colors'

export const metadata: Metadata = {
  title: 'Luna | Colors',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/colors'
  }
}

export default function Page() {
  return (
    <>
      <Overview />
      <Customize />
      <ColorPallete />
    </>
  )
}
