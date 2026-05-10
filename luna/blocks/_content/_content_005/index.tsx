'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function Content005() {
  return (
    <BlockWrapper fullWidth>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
          textAlign: 'center',
          padding: '24px',
          width: '100%',
          maxWidth: '640px',
          margin: 'auto',
          boxSizing: 'border-box'
        }}
      >
        <Typography variant='titleSmall' color='textDisabled'>
          Keep Things Consistent
        </Typography>

        <Typography variant='headlineLarge' color='textPrimary'>
          A unified look without compromising creativity.
        </Typography>

        <Image
          src={image}
          alt=''
          style={{
            objectFit: 'cover',
            borderRadius: '12px',
            height: '300px',
            width: '100%',
            margin: '24px auto'
          }}
        />

        <Typography variant='bodyLarge' color='textSecondary'>
          A design system isn’t just a collection of components — it’s a set of
          rules that keep everything working together. Luna helps you stay
          consistent across the board without sacrificing creativity.
        </Typography>

        <Button variant='contained' sx={{ marginTop: '8px' }}>
          Browse the System
        </Button>
      </Box>
    </BlockWrapper>
  )
}
