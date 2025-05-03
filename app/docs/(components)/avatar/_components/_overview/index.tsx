'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Avatar } from '@/luna/components'
import { IconUser } from '@tabler/icons-react'

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
        <Typography variant='titleMedium'>Avatar</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='16px'>
        <Box display='flex' gap='16px' alignItems='center'>
          <Avatar sx={{ width: 32, height: 32 }}>
            <IconUser size={16} />
          </Avatar>
          <Avatar sx={{ width: 40, height: 40 }}>
            <IconUser size={16} />
          </Avatar>
        </Box>

        <Box display='flex' gap='16px' alignItems='center'>
          <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>
          <Avatar sx={{ width: 40, height: 40 }}>H</Avatar>
        </Box>

        <Box display='flex' gap='16px' alignItems='center'>
          <Avatar
            sx={{ width: 32, height: 32 }}
            alt=''
            src='/assets/user.jpg'
          />
          <Avatar
            sx={{ width: 40, height: 40 }}
            alt=''
            src='/assets/user.jpg'
          />
        </Box>
      </Box>
    </Box>
  )
}
