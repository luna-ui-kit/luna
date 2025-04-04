import { Metadata } from 'next'
import { SelectSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Select',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/select'
  }
}

export default function Page() {
  return <SelectSection />
}
