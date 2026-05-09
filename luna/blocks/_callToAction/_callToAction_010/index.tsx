'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Paper, Typography, useTheme } from '@mui/material'

export function CallToAction010() {
  const theme = useTheme()

  return (
    <BlockWrapper fullWidth>
      <Paper
        sx={{
          display: 'flex',
          position: 'relative',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          background: theme.palette.background.paper,
          borderRadius: '0',
          padding: '28px 24px 24px'
        }}
        elevation={20}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            background: theme.palette.primary.main,
            width: '100%',
            height: '4px'
          }}
        ></Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant='headlineMedium' color='textPrimary'>
            Get Started with Ease
          </Typography>

          <Typography variant='bodyMedium' color='textSecondary'>
            Jump right in and start building with flexible, ready-to-use
            components.
          </Typography>
        </Box>

        <Button variant='contained'>Contribute on GitHub</Button>
      </Paper>
    </BlockWrapper>
  )
}
