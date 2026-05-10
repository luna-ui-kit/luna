'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function Content006() {
  const theme = useTheme()

  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              backgroundColor: theme.palette.background.paper,
              padding: '24px',
              borderRadius: '24px',
              flexGrow: 1
            }}
          >
            <Typography variant='titleSmall' color='textDisabled'>
              See It in Action
            </Typography>

            <Typography variant='headlineLarge' color='textPrimary'>
              Curious what it can do?
            </Typography>

            <Typography variant='bodyLarge' color='textSecondary'>
              Browse our live preview and explore how everything looks, feels,
              and scales across breakpoints — no guesswork needed.
            </Typography>

            <Button variant='contained' sx={{ marginTop: '8px' }}>
              Explore Components
            </Button>
          </Box>

          <Image
            src={image}
            alt=''
            style={{
              objectFit: 'cover',
              borderRadius: '12px',
              height: '300px',
              width: '100%',
              flexGrow: 1
            }}
          />
        </Box>
      </Box>
    </BlockWrapper>
  )
}
