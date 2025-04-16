import { Metadata } from 'next'
import { SnackbarSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Snackbar',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/snackbar'
  }
}

export default function Page() {
  return <SnackbarSection />
}
