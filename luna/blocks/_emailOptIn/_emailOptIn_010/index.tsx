'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material'

export function EmailOptIn010() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: 4, md: 8 } }}>
        <Box sx={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <Typography variant='headlineSmall'>Get curated content</Typography>
          <Typography variant='bodySmall' color='textSecondary' sx={{ mb: 2 }}>
            We send selected articles and resources — no spam.
          </Typography>

          <Box
            component='form'
            onSubmit={e => e.preventDefault()}
            sx={{ display: 'grid', gap: 1 }}
          >
            <TextField
              label='Email address'
              placeholder='name@company.com'
              type='email'
              aria-label='Email address'
              size='small'
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox size='small' />}
              label={
                <Typography variant='bodySmall'>
                  I agree to receive emails
                </Typography>
              }
            />
            <Button variant='contained' type='submit'>
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
