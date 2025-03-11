'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import heroImage from '@/public/assets/image002.webp'

export function Hero002() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          mt: '64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          paddingY: '40px'
        }}
      >
        <Box sx={{}}>
          <Typography variant='displayLarge'>YOUR NEW IDEAS</Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              gap: { xs: '0', md: '24px' },
              alignItems: 'center'
            }}
          >
            <Typography variant='titleMedium'>Landing Page</Typography>

            <Typography variant='displayLarge'>OUR LAYOUTS</Typography>
          </Box>
        </Box>

        <Image
          src={heroImage}
          alt=''
          style={{
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </Box>
    </BlockWrapper>
  )
}
