'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function Content009() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center'
        }}
      >
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

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            margin: 'auto auto 32px auto'
          }}
        >
          <Typography variant='headlineLarge' color='textPrimary'>
            Build Once, Use Everywhere
          </Typography>

          <Grid spacing={'24px'} container>
            <Grid
              size={{ xs: 12, sm: 4, lg: 4 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Typography variant='bodyMedium' color='textSecondary'>
                Every component is flexible enough to adapt, yet consistent
                enough to keep your product looking unified.
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4, lg: 4 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Typography variant='bodyMedium' color='textSecondary'>
                Whether you&apos;re designing in Figma or coding in Next.js,
                your work stays in sync from start to finish.
              </Typography>
            </Grid>

            <Grid
              size={{ xs: 12, sm: 4, lg: 4 }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Typography variant='bodyMedium' color='textSecondary'>
                Update your color palette, spacing, and typography across all
                components with just a few tweaks.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
