'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Button } from '@/luna/components'

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
        <Typography variant='titleMedium'>Button</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px' alignItems='baseline'>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button variant='text'>Text</Button>
        <Button variant='link'>Link</Button>
      </Box>
    </Box>
  )
}
