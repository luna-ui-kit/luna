'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function Content007() {
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant='titleSmall' color='textDisabled'>
            Keep Things Consistent
          </Typography>

          <Typography variant='headlineLarge' color='textPrimary'>
            A unified look without compromising creativity.
          </Typography>

          <Typography variant='bodyLarge' color='textSecondary'>
            A design system isn’t just a collection of components — it’s a set
            of rules that keep everything working together. Luna helps you stay
            consistent across the board without sacrificing creativity.
          </Typography>

          <Button variant='contained' sx={{ marginTop: '8px' }}>
            Browse the System
          </Button>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '16px',
            width: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '16px',
              width: '100%'
            }}
          >
            <Image
              src={image}
              alt=''
              style={{
                objectFit: 'cover',
                borderRadius: '12px',
                height: '300px',
                width: '100%'
              }}
            />

            <Image
              src={image}
              alt=''
              style={{
                objectFit: 'cover',
                borderRadius: '12px',
                height: '300px',
                width: '100%'
              }}
            />
          </Box>

          <Image
            src={image}
            alt=''
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
              height: '300px',
              width: '100%'
            }}
          />
        </Box>
      </Box>
    </BlockWrapper>
  )
}
