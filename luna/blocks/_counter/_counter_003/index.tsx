import { BlockWrapper } from '@/luna/components'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import { CountersData } from '../__data'

export const Counter003 = () => {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{ backgroundColor: theme.palette.background.paper }}
    >
      <Box
        sx={{
          paddingY: { xs: '24px', md: '40px' },
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
              flexDirection: 'column',
              width: '100%',
              textAlign: 'center',
              alignItems: 'center'
            }}
          >
            <Typography variant='labelMedium' color='textSecondary'>
              {counter.title}
            </Typography>

            <Typography variant='headlineLarge' color='textPrimary'>
              {counter.amount}+
            </Typography>

            <Divider
              sx={{
                marginY: '16px',
                width: '80px',
                borderColor: theme.palette.secondary.main
              }}
            />

            <Typography variant='bodyMedium' color='textSecondary'>
              {counter.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </BlockWrapper>
  )
}
