'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export function EmailOptIn004() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: 4, md: 10 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 560, margin: '0 auto' }}>
          <Typography variant='headlineMedium'>Never miss an update</Typography>
          <Typography variant='bodyMedium' color='textSecondary' sx={{ my: 2 }}>
            Short, useful updates about product, design, and engineering.
          </Typography>

          <Box
            component='form'
            onSubmit={e => e.preventDefault()}
            sx={{ display: 'grid', gap: 2 }}
          >
            <TextField
              label='Email address'
              placeholder='name@company.com'
              type='email'
              aria-label='Email address'
              size='small'
              fullWidth
            />
            <Button variant='contained' type='submit'>
              Subscribe
            </Button>
            <Typography variant='bodySmall' color='textDisabled'>
              We respect your privacy. Unsubscribe anytime.
            </Typography>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
