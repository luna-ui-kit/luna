import { Metadata } from 'next'
import { AvatarSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Avatar',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/avatar'
  }
}

export default function Page() {
  return <AvatarSection />
}
