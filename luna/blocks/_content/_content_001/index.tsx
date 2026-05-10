'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Grid, Typography } from '@mui/material'

export function Content001() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px', lg: '80px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '720px',
            margin: 'auto auto 32px auto'
          }}
        >
          <Typography variant='titleSmall' color='textDisabled'>
            Stop reinventing the wheel
          </Typography>

          <Typography variant='headlineLarge' color='textPrimary'>
            Build Once, Use Everywhere
          </Typography>

          <Typography variant='bodyMedium' color='textSecondary'>
            Save time and reduce repetition. With a system built on reusable
            components, you can create once and reuse across all your projects —
            without losing control over the details.
          </Typography>

          <Button variant='contained'>Explore Components</Button>
        </Box>

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
              Every component is flexible enough to adapt, yet consistent enough
              to keep your product looking unified.
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
              Whether you&apos;re designing in Figma or coding in Next.js, your
              work stays in sync from start to finish.
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
    </BlockWrapper>
  )
}
