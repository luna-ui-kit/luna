'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'

export function CallToAction004() {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box display='flex' justifyContent='center'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center'
            }}
            textAlign='center'
            maxWidth='640px'
          >
            <Typography variant='headlineLarge' color='textPrimary'>
              Build faster, design smarter.
            </Typography>

            <Typography variant='bodyLarge' color='textSecondary'>
              Luna UI Kit helps you focus on what matters. Stop reinventing the
              wheel and start shipping great experiences today.
            </Typography>

            <Button variant='contained' sx={{ marginTop: '8px' }}>
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
