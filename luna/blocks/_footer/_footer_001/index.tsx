'use client'
import { BlockWrapper, Button } from '@/luna/components'
import {
  Box,
  Grid2 as Grid,
  IconButton,
  Typography,
  useTheme
} from '@mui/material'
import logo from '@/public/Logo.webp'
import Image from 'next/image'
import {
  IconAt,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMapPin,
  IconPhoneCall
} from '@tabler/icons-react'
import Link from 'next/link'

export function Footer001() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Grid spacing={'24px'} container>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
            >
              <Image src={logo} width={110} height={32} alt='' />

              <Typography variant='bodyMedium'>
                Lorem ipsum dolor sit amet consec tetur adipis cing tempor
                labore.
              </Typography>

              <Box sx={{ display: 'flex', gap: '16px' }}>
                <IconButton>
                  <IconBrandFacebook />
                </IconButton>

                <IconButton>
                  <IconBrandTwitter />
                </IconButton>

                <IconButton>
                  <IconBrandYoutube />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant='titleMedium'>Our Pages</Typography>

              <Link href={'#'}>
                <Button variant='link' sx={{ textDecoration: 'none' }}>
                  Homepage
                </Button>
              </Link>

              <Link href={'#'}>
                <Button variant='link' sx={{ textDecoration: 'none' }}>
                  About Us
                </Button>
              </Link>

              <Link href={'#'}>
                <Button variant='link' sx={{ textDecoration: 'none' }}>
                  Portfolio
                </Button>
              </Link>

              <Link href={'#'}>
                <Button variant='link' sx={{ textDecoration: 'none' }}>
                  Contact
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant='titleMedium'>Services</Typography>

              <Link href={'#'}>
                <Button variant='link' sx={{ textDecoration: 'none' }}>
                  Cloud Storage
                </Button>
              </Link>

              <Link href={'#'}>
                <Button variant='link' sx={{ textDecoration: 'none' }}>
                  Visual Development
                </Button>
              </Link>

              <Link href={'#'}>
                <Button variant='link' sx={{ textDecoration: 'none' }}>
                  User Interface
                </Button>
              </Link>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                mb: '24px'
              }}
            >
              <Typography variant='titleMedium'>Contact</Typography>

              <Button
                variant='link'
                sx={{ textDecoration: 'none' }}
                startIcon={<IconAt />}
              >
                demo@luna.com
              </Button>

              <Button
                variant='link'
                sx={{ textDecoration: 'none' }}
                startIcon={<IconPhoneCall />}
              >
                demo@luna.com
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant='titleMedium'>Location</Typography>

              <Button
                variant='link'
                sx={{ textDecoration: 'none' }}
                startIcon={<IconMapPin />}
              >
                68 Apple Street Newyork
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.grey[200]}`,
            mt: '24px',
            pt: '24px',
            textAlign: 'center'
          }}
        >
          <Typography variant='bodyExtraSmall' color='textDisabled'>
            Your Company — 2025 All Right Reserved
          </Typography>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
