import { Metadata } from 'next'
import { Grid } from '@mui/material'
import { Drawer, Navbar, Sidebar } from './(document)/_components'
import { BlockWrapper } from '@/luna/components'

export const metadata: Metadata = {
  title: 'Luna | Document',
  description: '...'
}

export default function DocumentLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <Drawer />

      <BlockWrapper>
        <Grid container spacing={'24px'} pt='86px' pb='32px'>
          <Sidebar />

          <Grid
            size={{ xs: 12, sm: 12, md: 9 }}
            display='flex'
            flexDirection='column'
            gap='24px'
          >
            {children}
          </Grid>
        </Grid>
      </BlockWrapper>
    </>
  )
}
