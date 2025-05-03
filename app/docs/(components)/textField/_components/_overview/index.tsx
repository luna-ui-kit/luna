'use client'
import { TextField } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'

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
        <Typography variant='titleMedium'>Text Field</Typography>
      </Box>

      <Box display='flex' flexDirection='column' gap='24px'>
        <TextField
          variant='outlined'
          label='Outlined'
          helperText='Helper text'
        />

        <TextField variant='outlined' label='Textarea' multiline minRows={4} />
      </Box>
    </Box>
  )
}
