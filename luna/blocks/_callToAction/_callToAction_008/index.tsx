'use client'
import { Avatar } from '@/luna/components'
import { AvatarGroup, Box, Typography, useTheme } from '@mui/material'

export function CallToAction008() {
  const theme = useTheme()

  return (
    <Box
      position='relative'
      display='flex'
      width='100%'
      padding='24px'
      gap='16px'
      height='fit-content'
      minHeight='100px'
      boxSizing='border-box'
      alignItems='center'
      justifyContent='center'
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        background: theme.palette.primary.main
      }}
    >
      <AvatarGroup>
        <Avatar
          sx={{ width: 32, height: 32 }}
          alt=''
          src='/assets/image-placeholder.jpg'
        />
        <Avatar
          sx={{ width: 32, height: 32 }}
          alt=''
          src='/assets/image-placeholder.jpg'
        />
        <Avatar
          sx={{ width: 32, height: 32 }}
          alt=''
          src='/assets/image-placeholder.jpg'
        />
        <Avatar
          sx={{ width: 32, height: 32 }}
          alt=''
          src='/assets/image-placeholder.jpg'
        />
      </AvatarGroup>

      <Typography variant='titleSmall' color='white'>
        Your ideas help shape what’s next.
      </Typography>
    </Box>
  )
}
