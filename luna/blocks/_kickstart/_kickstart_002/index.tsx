'use client'
import { BlockWrapper } from '@/luna/components'
import { Grid, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import kickstartImage from '@/public/assets/image004.webp'
import { data } from './data'
import { Accordions } from '../../_accordion/_accordion_001'

export function Kickstart002() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Grid
        spacing={'64px'}
        container
        sx={{
          paddingY: { xs: '24px', sm: '40px', md: '80px' }
        }}
      >
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

          <Accordions data={data} />
        </Grid>
      </Grid>
    </BlockWrapper>
  )
}
