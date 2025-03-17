'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import { IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import heroImage from '@/public/assets/image001.webp'

export function Hero001() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          mt: '64px',
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
          <Typography variant='displayLarge'>
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
          src={heroImage}
          alt=''
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '500px',
            objectFit: 'cover',
            borderRadius: '24px'
          }}
        />
      </Box>
    </BlockWrapper>
  )
}
