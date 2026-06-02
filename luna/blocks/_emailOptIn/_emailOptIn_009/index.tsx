'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export function EmailOptIn009() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          paddingY: { xs: 4, md: 10 },
          backgroundColor: 'background.paper'
        }}
      >
        <Box sx={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <Typography variant='titleSmall' color='textSecondary'>
            Free resources
          </Typography>
          <Typography variant='headlineSmall' sx={{ my: 2 }}>
            Templates, snippets, and guides
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
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
