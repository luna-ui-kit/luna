'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export function EmailOptIn007() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: 4, md: 8 } }}>
        <Box
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            gap: 4,
            alignItems: 'center'
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant='headlineSmall'>
              Tips, patterns, and updates
            </Typography>
            <Typography variant='bodySmall' color='textSecondary'>
              Delivered every Monday.
            </Typography>
          </Box>

          <Box
            component='form'
            onSubmit={e => e.preventDefault()}
            sx={{ display: 'flex', gap: 1 }}
          >
            <TextField
              label='Email address'
              placeholder='name@company.com'
              type='email'
              aria-label='Email address'
              size='small'
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
