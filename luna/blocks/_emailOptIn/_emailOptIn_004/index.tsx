'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import { IconArrowUpRight, IconMail } from '@tabler/icons-react'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function EmailOptIn004() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          paddingY: { xs: '24px', md: '40px', lg: '64px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: '24px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
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
              flexDirection: { xs: 'column', md: 'row' },
              width: '100%',
              gap: '16px'
            }}
          >
            <TextField
              variant='outlined'
              placeholder='Email'
              fullWidth
              slotProps={{
                input: {
                  startAdornment: <IconMail />
                }
              }}
            />
            <Button variant='contained'>Subscribe Now</Button>
          </Box>

          <Button variant='link' endIcon={<IconArrowUpRight />}>
            Explore All Features
          </Button>
        </Box>

        <Image
          src={image}
          alt=''
          style={{
            objectFit: 'cover',
            borderRadius: '12px',
            height: '320px',
            width: '100%',
            maxWidth: '440px'
          }}
        />
      </Box>
    </BlockWrapper>
  )
}
