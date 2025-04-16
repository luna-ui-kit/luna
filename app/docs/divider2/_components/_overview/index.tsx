'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Divider } from '@/luna/components'

export const Overview = () => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      gap='24px'
      padding='24px'
      sx={{ background: theme.palette.background.paper }}
    >
      <Box display='flex' flexDirection='column' gap='4px'>
        <Typography variant='titleMedium'>Divider</Typography>
      </Box>

      <Box display='flex' flexDirection='column' gap='12px'>
        <Divider />
        <Divider sx={{ borderStyle: 'dashed', borderBottomWidth: '2px' }} />
        <Divider sx={{ borderStyle: 'dotted', borderBottomWidth: '2px' }} />
      </Box>

      <Box display='flex' gap='12px' height='40px'>
        {' '}
        <Divider orientation='vertical' />
        <Divider
          orientation='vertical'
          sx={{
            borderStyle: 'dashed',
            borderRightWidth: '2px'
          }}
        />
        <Divider
          orientation='vertical'
          sx={{
            borderStyle: 'dotted',
            borderRightWidth: '2px'
          }}
        />
      </Box>
    </Box>
  )
}
