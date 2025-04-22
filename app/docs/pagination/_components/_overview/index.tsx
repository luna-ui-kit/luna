'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Pagination } from '@/luna/components'

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
        <Typography variant='titleMedium'>Pagination</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <Pagination count={10} />
      </Box>
    </Box>
  )
}
