import { Button } from '@/luna/components'
import { Box, Grid2 as Grid, Typography } from '@mui/material'
import Link from 'next/link'
import logo from '@/public/logo.webp'
import Image from 'next/image'

export const Sidebar = () => {
  return (
    <Grid size={{ xs: 12, sm: 12, md: 3 }} sx={{ padding: '24px' }}>
      <Box
        sx={{
          position: { xs: 'relative', sm: 'relative', md: 'fixed' },
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          padding: '24px'
        }}
      >
        <Image src={logo} alt='' width={100} style={{ marginBottom: '24px' }} />

        <Link href={'#GettingStarted'}>
          <Button variant='link' sx={{ textDecoration: 'none' }}>
            🌔 Getting started
          </Button>
        </Link>

        <Typography variant='bodySmall' color='textDisabled'>
          Foundations
        </Typography>

        <Link href={'#Colors'}>
          <Button variant='link' sx={{ textDecoration: 'none' }}>
            ↳ Colors
          </Button>
        </Link>

        <Link href={'#Elevation'}>
          <Button variant='link' sx={{ textDecoration: 'none' }}>
            ↳ Elevation
          </Button>
        </Link>

        <Link href={'#Icons'}>
          <Button variant='link' sx={{ textDecoration: 'none' }}>
            ↳ Icons
          </Button>
        </Link>

        <Link href={'#Typography'}>
          <Button variant='link' sx={{ textDecoration: 'none' }}>
            ↳ Typography
          </Button>
        </Link>

        <Typography variant='bodySmall' color='textDisabled'>
          Components
        </Typography>

        <Link href={'#Button'}>
          <Button variant='link' sx={{ textDecoration: 'none' }}>
            ↳ Button
          </Button>
        </Link>

        <Link href={'#Checkbox'}>
          <Button variant='link' sx={{ textDecoration: 'none' }}>
            ↳ Checkbox
          </Button>
        </Link>
      </Box>
    </Grid>
  )
}
