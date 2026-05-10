'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'

export function Content003() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Box sx={{ paddingY: { xs: '24px', md: '40px', lg: '80px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '720px',
            margin: 'auto auto 32px auto'
          }}
        >
          <Typography variant='titleSmall' color='textDisabled'>
            Luna UI Kit
          </Typography>

          <Typography variant='headlineLarge' color='textPrimary'>
            Our Mission
          </Typography>

          <Typography variant='bodyMedium' color='textSecondary'>
            At Luna, we want to make it easy for designers, developers, and
            teams to create awesome digital experiences. Our goal is to give you
            the tools you need to build beautiful, functional, and scalable web
            apps — without the hassle. We’re all about making design and
            development faster, simpler, and more consistent. Luna isn’t just a
            UI kit, it’s a foundation that helps teams work better together and
            ship high-quality projects.
          </Typography>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
