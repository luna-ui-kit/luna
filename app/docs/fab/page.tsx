import { Metadata } from 'next'
import { FABSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | FAB',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/fab'
  }
}

export default function Page() {
  return <FABSection />
}
