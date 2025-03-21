import { Metadata } from 'next'
import { Grid2 as Grid } from '@mui/material'
import { Drawer, Navbar, Sidebar } from './_components'

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

      <Grid container spacing={0} sx={{ pt: '64px' }}>
        <Sidebar />

        <Grid
          size={{ xs: 12, sm: 12, md: 9 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            padding: '24px'
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  )
}
