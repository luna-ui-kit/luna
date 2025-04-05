import { Metadata } from 'next'
import { SnackbarSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Snackbar',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/snackbar'
  }
}

export default function Page() {
  return <SnackbarSection />
}
