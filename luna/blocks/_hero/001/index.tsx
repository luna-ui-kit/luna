'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import profilePic from '@/public/assets/image001.webp'

export function Hero001() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <BlockWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          paddingY: '40px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%',
            maxWidth: '520px'
          }}
        >
          <Typography variant={matches ? 'headlineMedium' : 'displayLarge'}>
            Interactive Web Elements Design
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: '12px'
            }}
          >
            <Button variant='contained'>Learn More</Button>

            <Button variant='text' endIcon={<IconArrowRight />}>
              Make a request
            </Button>
          </Box>
        </Box>

        <Image
          src={profilePic}
          alt=''
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '500px',
            objectFit: 'cover'
          }}
        />
      </Box>
    </BlockWrapper>
  )
}
