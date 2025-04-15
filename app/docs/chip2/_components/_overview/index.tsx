'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Chip } from '@/luna/components'

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
        <Typography variant='titleMedium'>Chip</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <Chip label='Filled' variant='filled' />
        <Chip label='Filled Primary' variant='filled' color='primary' />
        <Chip label='Filled Secondary' variant='filled' color='secondary' />
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <Chip label='Outlined' variant='outlined' />
        <Chip label='Outlined Primary' variant='outlined' color='primary' />
        <Chip label='Outlined Secondary' variant='outlined' color='secondary' />
      </Box>
    </Box>
  )
}
