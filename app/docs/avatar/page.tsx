import { Metadata } from 'next'
import { AvatarSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Avatar',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/avatar'
  }
}

export default function Page() {
  return <AvatarSection />
}
