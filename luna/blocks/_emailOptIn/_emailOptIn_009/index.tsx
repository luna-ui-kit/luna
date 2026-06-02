'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Grid, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder-two.png'
import { IconArrowUpRight, IconMail } from '@tabler/icons-react'

export function EmailOptIn009() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Grid
        spacing={'40px'}
        container
        sx={{
          paddingY: { xs: '24px', sm: '40px', md: '80px' }
        }}
      >
        <Grid
          size={{ xs: 12, md: 7 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            justifyContent: 'center'
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
        </Grid>

        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Image
            src={image}
            alt=''
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '600px',
              objectFit: 'contain'
            }}
          />
        </Grid>
      </Grid>
    </BlockWrapper>
  )
}
