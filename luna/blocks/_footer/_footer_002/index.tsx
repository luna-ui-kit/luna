'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import logo from '@/public/Logo.webp'
import Image from 'next/image'
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube
} from '@tabler/icons-react'

export function Footer002() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.grey[200]}`
      }}
    >
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'space-between' },
            gap: '24px'
          }}
        >
          <Image src={logo} width={110} height={32} alt='' />

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
