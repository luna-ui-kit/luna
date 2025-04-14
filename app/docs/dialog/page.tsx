import { Metadata } from 'next'
import { DialogSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Dialog',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/dialog'
  }
}

export default function Page() {
  return <DialogSection />
}
