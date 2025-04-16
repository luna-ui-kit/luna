'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { FirstDialog } from '../_dialogs/firstDialog'
import { SecondDialog } from '../_dialogs/secondDialog'
import { ThirdDialog } from '../_dialogs/thirdDialog'

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
        <Typography variant='titleMedium'>Dialog</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <FirstDialog />
        <SecondDialog />
        <ThirdDialog />
      </Box>
    </Box>
  )
}
