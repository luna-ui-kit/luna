'use client'
import { Avatar, BlockWrapper, Button, TextField } from '@/luna/components'
import { AvatarGroup, Box, Typography, useTheme } from '@mui/material'
import { IconMail } from '@tabler/icons-react'

export function EmailOptIn002() {
  const theme = useTheme()

  return (
    <BlockWrapper>
      <Box
        sx={{
          paddingY: { xs: '24px', md: '40px', lg: '64px' },
          paddingX: '24px',
          boxSizing: 'border-box',
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: '24px'
        }}
      >
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

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <AvatarGroup>
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt=''
                src='/assets/image-placeholder.jpg'
              />
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt=''
                src='/assets/image-placeholder.jpg'
              />
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt=''
                src='/assets/image-placeholder.jpg'
              />
              <Avatar
                sx={{ width: 32, height: 32 }}
                alt=''
                src='/assets/image-placeholder.jpg'
              />
            </AvatarGroup>

            <Typography variant='bodyMedium' color={theme.palette.success.main}>
              Join our growing list of design and dev enthusiasts.
            </Typography>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
