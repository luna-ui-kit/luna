import { Metadata } from 'next'
import { Overview } from './_overview'

export const metadata: Metadata = {
  title: 'Luna UI Kit | Drawer (Sidebar)',
  alternates: {
    canonical: 'https://luna-ui-kit.com/docs/drawer'
  }
}

export default function Page() {
  return <Overview />
}
