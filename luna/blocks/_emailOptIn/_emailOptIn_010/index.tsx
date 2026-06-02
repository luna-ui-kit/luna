'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import { IconMail } from '@tabler/icons-react'
import { Counter004 } from './_counter_004'

export function EmailOptIn010() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          paddingY: { xs: '24px', md: '40px', lg: '64px' },
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '100%',
            maxWidth: '800px',
            margin: 'auto'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              margin: 'auto',
              alignItems: 'center'
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

          <Counter004 />

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
        </Box>
      </Box>
    </BlockWrapper>
  )
}
