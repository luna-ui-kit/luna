'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export function EmailOptIn003() {
  return (
    <BlockWrapper>
      <Box
        sx={{ paddingY: { xs: 4, md: 8 }, backgroundColor: 'background.paper' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            maxWidth: 920,
            margin: '0 auto'
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant='titleSmall' color='textDisabled'>
              Stay updated
            </Typography>
            <Typography variant='headlineSmall'>
              Weekly thoughts & resources
            </Typography>
            <Typography
              variant='bodySmall'
              color='textSecondary'
              sx={{ mt: 1 }}
            >
              Practical guides and short reads about UI and product design.
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
              Join
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
