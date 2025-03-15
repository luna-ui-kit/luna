'use client'
import { Box, Typography, useTheme } from '@mui/material'
import AvatarCode from '../_code/avatarCode'
import { Avatar } from '@/luna/components'
import { IconUser } from '@tabler/icons-react'

export const AvatarSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Avatar'
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
        <Typography variant='titleSmall'>Avatar</Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ width: 32, height: 32 }}>
            <IconUser size={16} />
          </Avatar>

          <Avatar sx={{ width: 40, height: 40 }}>
            <IconUser size={16} />
          </Avatar>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>

          <Avatar sx={{ width: 40, height: 40 }}>H</Avatar>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
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

        <AvatarCode />
      </Box>
    </Box>
  )
}
