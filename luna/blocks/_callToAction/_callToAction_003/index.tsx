'use client'
import { BlockWrapper, Button, Divider } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function CallToAction003() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant='titleSmall' color='textDisabled'>
              Sample Subtitle
            </Typography>

            <Typography variant='headlineLarge' color='textPrimary'>
              Curious what it can do?
            </Typography>

            <Divider />

            <Typography variant='bodyLarge' color='textSecondary'>
              Browse our live preview and explore how everything looks, feels,
              and scales across breakpoints — no guesswork needed.
            </Typography>

            <Button variant='contained' sx={{ marginTop: '8px' }}>
              Learn More
            </Button>
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
