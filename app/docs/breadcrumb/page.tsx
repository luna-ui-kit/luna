import { Metadata } from 'next'
import { BreadcrumbSection } from './_components/section'

export const metadata: Metadata = {
  title: 'Luna | Breadcrumb',
  alternates: {
    canonical: 'https://luna-ui-kit.com/document/breadcrumb'
  }
}

export default function Page() {
  return <BreadcrumbSection />
}
