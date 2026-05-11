import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import { IconRoadSign } from '@tabler/icons-react'

export const Counter008 = () => {
  return (
    <BlockWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          textAlign: 'center',
          m: 'auto auto 32px auto',
          width: '100%',
          maxWidth: '720px'
        }}
      >
        <IconRoadSign size='56px' />

        <Typography variant='headlineLarge' color='textPrimary'>
          +745.682
        </Typography>

        <Typography variant='bodyMedium' color='textSecondary'>
          Save time and reduce repetition. With a system built on reusable
          components, you can create once and reuse across all your projects —
          without losing control over the details.
        </Typography>

        <Button variant='link'>Explore Components</Button>
      </Box>
    </BlockWrapper>
  )
}
