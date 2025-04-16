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
            Sample Subtitle
          </Typography>

          <Typography variant='headlineLarge'>
            Porro est dolorem ipsum dolor sit amet consec.
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
            <Typography variant='titleMedium'>Chat Support</Typography>

            <Typography variant='bodyMedium'>
              Sed ut unde omnis iste natus sit volur tatem accus laudan tium
              totam rem eaque ipsa ab illo inventore et architecto beatae vitae
              dicta sunt explicabo enim sit asper sed dolores eos serui nesciun.
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
            <Typography variant='titleMedium'>Video Production</Typography>

            <Typography variant='bodyMedium'>
              Sed ut unde omnis iste natus sit volur tatem accus laudan tium
              totam rem eaque ipsa ab illo inventore et architecto beatae vitae
              dicta sunt explicabo enim sit asper sed dolores eos serui nesciun.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </BlockWrapper>
  )
}
