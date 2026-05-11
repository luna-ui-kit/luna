import { BlockWrapper } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { CountersData } from '../__data'

export const Counter001 = () => {
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
          gap: '24px',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {CountersData.map((counter, _) => (
          <Box
            key={_}
            sx={{
              position: 'relative',
              width: '100%',
              textAlign: 'center'
            }}
          >
            <Typography variant='displayLarge' color={theme.palette.grey[200]}>
              {counter.amount}+
            </Typography>

            <Typography
              variant='labelMedium'
              color='textPrimary'
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {counter.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </BlockWrapper>
  )
}
