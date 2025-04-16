'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Fab } from '@/luna/components'
import { IconPlus } from '@tabler/icons-react'

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
        <Typography variant='titleMedium'>
          FAB (Floating Action Button)
        </Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <Fab size='small' color='primary'>
          <IconPlus />
        </Fab>

        <Fab size='small' color='secondary'>
          <IconPlus />
        </Fab>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <Fab size='medium' color='primary'>
          <IconPlus />
        </Fab>

        <Fab size='medium' color='secondary'>
          <IconPlus />
        </Fab>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <Fab size='large' color='primary'>
          <IconPlus />
        </Fab>
        <Fab size='large' color='secondary'>
          <IconPlus />
        </Fab>
      </Box>
    </Box>
  )
}
