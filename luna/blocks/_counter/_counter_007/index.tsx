import { BlockWrapper } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { CountersData } from '../__data'

export const Counter007 = () => {
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
              boxSizing: 'border-box',
              paddingLeft: '16px',
              borderLeft: '2px solid',
              borderColor: theme.palette.primary.main
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
    </BlockWrapper>
  )
}
