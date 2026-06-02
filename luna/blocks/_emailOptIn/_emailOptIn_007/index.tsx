'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import { IconMail } from '@tabler/icons-react'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function EmailOptIn007() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px', lg: '64px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '720px',
            margin: 'auto'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <Typography variant='titleSmall' color='textDisabled'>
              Stay in the loop
            </Typography>

            <Typography variant='headlineLarge' color='textPrimary'>
              Subscribe to our newsletter
            </Typography>

            <Typography variant='bodyMedium' color='textSecondary'>
              Get the latest updates, new components, and design tips straight
              to your inbox.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              maxWidth: '400px',
              gap: '16px'
            }}
          >
            <TextField
              variant='outlined'
              placeholder='Email'
              slotProps={{
                input: {
                  startAdornment: <IconMail />
                }
              }}
            />
            <Button variant='contained' sx={{ width: '100%' }}>
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Box>

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
    </BlockWrapper>
  )
}
