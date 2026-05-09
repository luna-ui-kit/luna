'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Card, Typography, useTheme } from '@mui/material'
import { IconPhoneCall } from '@tabler/icons-react'

export function CallToAction001() {
  const theme = useTheme()

  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Card
          elevation={20}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '24px',
            justifyContent: 'space-between',
            backgroundColor: theme.palette.secondary.main,
            padding: '24px',
            borderRadius: '24px'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Typography variant='headlineLarge' color='white'>
              Get Started with Ease
            </Typography>

            <Typography variant='bodyMedium' color='white'>
              Jump right in and start building with flexible, ready-to-use
              components.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              minWidth: 'fit-content',
              gap: '16px',
              alignItems: 'center'
            }}
          >
            <Button
              startIcon={<IconPhoneCall color='white' />}
              variant='outlined'
              sx={{ color: 'white' }}
            >
              0800 212 44 77
            </Button>

            <Button variant='secondary'>Start Now</Button>
          </Box>
        </Card>
      </Box>
    </BlockWrapper>
  )
}
