'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function Content008() {
  const theme = useTheme()

  return (
    <BlockWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center'
        }}
      >
        <Image
          src={image}
          alt=''
          style={{
            objectFit: 'cover',
            borderRadius: '12px',
            height: '240px',
            width: '100%'
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '8px', md: '24px' },
            alignItems: 'center'
          }}
        >
          <Typography
            variant='headlineLarge'
            color='textPrimary'
            sx={{ width: '100%' }}
          >
            Skip the busy work and start building.
          </Typography>

          <Box
            sx={{
              width: '100%',
              borderLeft: `2px solid ${theme.palette.primary.main}`,
              paddingLeft: '16px',
              boxSizing: 'border-box'
            }}
          >
            <Typography variant='bodyMedium' color='textSecondary'>
              Say goodbye to wasting hours setting up the basics. Luna handles
              the foundational stuff, so you can jump straight into solving real
              problems and building better products.
            </Typography>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
