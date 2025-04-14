import { Metadata } from 'next'
import { DialogSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Dialog',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/dialog'
  }
}

export default function Page() {
  return <DialogSection />
}
