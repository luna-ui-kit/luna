import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { CountersData } from '../__data'

export const Counter006 = () => {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{
        backgroundColor: theme.palette.background.paper
      }}
    >
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
            gap: '24px'
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
                borderRadius: '12px',
                padding: '24px',
                border: `1px solid ${theme.palette.divider}`,
                boxSizing: 'border-box',
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

              <Button variant='link'>Learn More</Button>
            </Box>
          ))}
        </Box>
      </Box>
    </BlockWrapper>
  )
}
