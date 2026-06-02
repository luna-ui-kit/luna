'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export function EmailOptIn005() {
  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: 3, md: 6 }, backgroundColor: 'action.hover' }}>
        <Box
          sx={{
            maxWidth: 1000,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant='titleSmall' color='textDisabled'>
              Newsletter
            </Typography>
            <Typography variant='headlineSmall'>
              Curated links and tutorials
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
              Sign up
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
