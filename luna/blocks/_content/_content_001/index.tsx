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
            margin: 'auto',
            mb: '24px'
          }}
        >
          <Typography variant='titleMedium' color='textDisabled'>
            Sample Subtitle
          </Typography>

          <Typography variant='headlineLarge'>
            Porro est dolorem ipsum dolor sit amet consec.
          </Typography>

          <Typography variant='bodyMedium'>
            Lorem ipsum dolor sit amet consec tetur adipis cing elit sed do
            eiusmod tempor ut labore et magna ad minim veniam nostrud
            exercitation.
          </Typography>

          <Button variant='contained'>Learn More</Button>
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
            <Typography variant='bodyMedium'>
              Sed ut unde omnis iste natus sit volur tatem accus laudan tium
              totam rem eaque ipsa ab illo inventore et architecto beatae vitae
              dicta sunt explicabo enim sit asper sed dolores eos serui nesciun.
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
            <Typography variant='bodyMedium'>
              Sed ut unde omnis iste natus sit volur tatem accus laudan tium
              totam rem eaque ipsa ab illo inventore et architecto beatae vitae
              dicta sunt explicabo enim sit asper sed dolores eos serui nesciun.
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
