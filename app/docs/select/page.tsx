import { Metadata } from 'next'
import { SelectSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Select',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/select'
  }
}

export default function Page() {
  return <SelectSection />
}
