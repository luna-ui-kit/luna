'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Grid2 as Grid, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import kickstartImage from '@/public/assets/image003.webp'

export function Kickstart001() {
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
          padding: { xs: '24px', sm: '40px', md: '80px' }
        }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            justifyContent: 'center'
          }}
        >
          <Typography variant='titleMedium' color='textDisabled'>
            Sample Subtitle
          </Typography>

          <Typography variant='headlineLarge'>
            Quis autem veleum iure repreh enderit.
          </Typography>

          <Typography variant='bodyMedium'>
            Sed ut unde omnis iste natus sit volur tatem accus antium laudan
            tium totam rem aperiam eaque ipsa ab illo inventore veritatis et
            architecto beatae vitae dicta sunt explicabo.
          </Typography>

          <Button variant='contained'>Learn More</Button>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Image
            src={kickstartImage}
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
