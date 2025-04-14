import { Metadata } from 'next'
import { CheckboxSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Checkbox',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/checkbox'
  }
}

export default function Page() {
  return <CheckboxSection />
}
