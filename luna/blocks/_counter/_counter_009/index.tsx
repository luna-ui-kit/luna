import { BlockWrapper } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { CountersData } from '../__data'

export const Counter009 = () => {
  const theme = useTheme()

  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
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
          <Typography variant='headlineLarge' color='textPrimary'>
            Why Luna
          </Typography>

          <Typography variant='bodyMedium' color='textSecondary'>
            Everything you need in one place
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '24px',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '24px',
            padding: '24px'
          }}
        >
          {CountersData.map((counter, _) => (
            <Box
              key={_}
              sx={{
                display: 'flex',
                gap: '16px',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <Typography variant='labelMedium' color='textSecondary'>
                {counter.title}
              </Typography>

              <Typography variant='headlineLarge' color='textPrimary'>
                {counter.amount}+
              </Typography>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center',
            m: '32px auto auto',
            width: '100%',
            maxWidth: '720px'
          }}
        >
          <Typography variant='bodyMedium' color='textSecondary'>
            Save time and reduce repetition. With a system built on reusable
            components, you can create once and reuse across all your projects —
            without losing control over the details.
          </Typography>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
