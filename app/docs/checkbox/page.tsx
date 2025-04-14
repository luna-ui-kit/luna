import { Metadata } from 'next'
import { CheckboxSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Checkbox',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/checkbox'
  }
}

export default function Page() {
  return <CheckboxSection />
}
