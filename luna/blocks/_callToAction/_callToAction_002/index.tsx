'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Card, Typography, useTheme } from '@mui/material'

export function CallToAction002() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant='titleMedium' color='textDisabled'>
              Sample Subtitle
            </Typography>

            <Typography variant='headlineLarge'>
              Porro est dolorem ipsum dolor sit amet consec.
            </Typography>
          </Box>

          <Card
            elevation={20}
            sx={{
              backgroundColor: theme.palette.primary.main,
              display: 'flex',
              flexDirection: 'column',
              padding: '32px',
              flexWrap: 'wrap',
              minWidth: 'fit-content',
              width: { md: 'auto', xs: '100%' },
              gap: '16px',
              alignItems: 'center',
              borderRadius: '24px'
            }}
          >
            <Typography variant='bodyLarge' color='white'>
              Call Us Now
            </Typography>

            <Typography variant='titleLarge' color='white'>
              0800 123 45 67
            </Typography>

            <Button variant='secondary'>Learn More</Button>
          </Card>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
