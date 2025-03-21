'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Divider } from '@/luna/components'
import DividerCode from '../_code/dividerCode'

export const DividerSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Divider'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        gap: '24px',
        padding: '24px',
        border: `1px solid ${theme.palette.grey[300]}`,
        background: theme.palette.background.paper
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>Divider</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <Divider />

          <Divider sx={{ borderStyle: 'dashed', borderBottomWidth: '2px' }} />

          <Divider sx={{ borderStyle: 'dotted', borderBottomWidth: '2px' }} />

          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Divider orientation='vertical' sx={{ height: '40px' }} />

            <Divider
              orientation='vertical'
              sx={{
                borderStyle: 'dashed',
                borderRightWidth: '2px',
                height: '40px'
              }}
            />

            <Divider
              orientation='vertical'
              sx={{
                borderStyle: 'dotted',
                borderRightWidth: '2px',
                height: '40px'
              }}
            />
          </Box>
        </Box>

        <DividerCode />
      </Box>
    </Box>
  )
}
