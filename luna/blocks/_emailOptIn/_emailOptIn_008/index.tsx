'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export function EmailOptIn008() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          paddingY: { xs: 3, md: 6 },
          borderTop: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box
          sx={{
            maxWidth: 820,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box>
            <Typography variant='titleSmall' color='textDisabled'>
              Stay in the loop
            </Typography>
            <Typography variant='headlineSmall'>Monthly highlights</Typography>
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
              Get updates
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
