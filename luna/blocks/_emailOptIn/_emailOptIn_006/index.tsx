'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export function EmailOptIn006() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: 6, md: 12 } }}>
        <Box sx={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <Typography variant='titleSmall' color='textSecondary'>
            Exclusive
          </Typography>
          <Typography variant='headlineLarge' sx={{ my: 2 }}>
            Be the first to know
          </Typography>
          <Box
            component='form'
            onSubmit={e => e.preventDefault()}
            sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}
          >
            <TextField
              label='Email address'
              placeholder='name@company.com'
              type='email'
              aria-label='Email address'
              size='small'
            />
            <Button variant='contained' type='submit'>
              Notify me
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
