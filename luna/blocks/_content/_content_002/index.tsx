'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Grid, Typography } from '@mui/material'

export function Content002() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px', lg: '80px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%',
            mb: '24px'
          }}
        >
          <Typography variant='titleMedium' color='textDisabled'>
            Design meets development
          </Typography>

          <Typography variant='headlineLarge'>
            Built for Designers and Developers
          </Typography>
        </Box>

        <Grid spacing={'24px'} container>
          <Grid
            size={{ xs: 12, sm: 6, lg: 6 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <Typography variant='titleMedium'>Code</Typography>

            <Typography variant='bodyMedium'>
              Luna bridges the gap between design and development. Whether
              you’re designing screens or writing code, the components behave
              the same way on both sides.
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, lg: 6 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <Typography variant='titleMedium'>Components</Typography>

            <Typography variant='bodyMedium'>
              Our Figma components are structured to match the coded ones — so
              nothing gets lost in translation.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </BlockWrapper>
  )
}
