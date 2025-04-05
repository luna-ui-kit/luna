import { Metadata } from 'next'
import { RadioGroupSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Radio Group',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/radioGroup'
  }
}

export default function Page() {
  return <RadioGroupSection />
}
