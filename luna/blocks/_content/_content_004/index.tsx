'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Grid, Typography } from '@mui/material'

export function Content004() {
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
          <Typography variant='titleSmall' color='textDisabled'>
            Stop reinventing the wheel
          </Typography>

          <Typography variant='headlineLarge' color='textPrimary'>
            Why Choose Us
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
            <Typography variant='bodyMedium' color='textSecondary'>
              Building for multiple screen sizes? We&apos;ve already handled it.
              Every component is built with 3 breakpoints in mind — mobile,
              tablet, and desktop — using Figma’s Local Variables.
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
            <Typography variant='bodyMedium' color='textSecondary'>
              No more blank pages or messy starter files. Luna UI Kit gives you
              a solid foundation of core elements and layouts, ready to use out
              of the box.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </BlockWrapper>
  )
}
