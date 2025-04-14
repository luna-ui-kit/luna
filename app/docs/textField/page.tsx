import { Metadata } from 'next'
import { TextFieldSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Text Field',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/textField'
  }
}

export default function Page() {
  return <TextFieldSection />
}
