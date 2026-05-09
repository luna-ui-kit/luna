'use client'
import { Avatar, Button } from '@/luna/components'
import { AvatarGroup, Box, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function CallToAction007() {
  const theme = useTheme()

  return (
    <Box
      position='relative'
      display='flex'
      flexDirection='column'
      width='100%'
      padding='24px'
      gap='16px'
      height='fit-content'
      minHeight='400px'
      boxSizing='border-box'
      alignItems='start'
      justifyContent='center'
    >
      <Image
        src={image}
        alt=''
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          height: '100%',
          width: '100%',
          zIndex: 1
        }}
      />

      <Box
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        zIndex={2}
        borderRadius='inherit'
        sx={{ background: 'rgba(0, 0, 0, 0.5)' }}
      />

      <Box
        display='flex'
        flexDirection='column'
        zIndex={3}
        gap='8px'
        padding='24px'
        width='100%'
        maxWidth='520px'
        borderRadius='24px'
        boxSizing='border-box'
        sx={{ background: theme.palette.background.default }}
      >
        <Typography variant='headlineLarge' color='textPrimary'>
          Clean design promotes easy navigation.
        </Typography>

        <Typography variant='bodyMedium' color='textSecondary'>
          We’re open-source and always evolving. If you’ve got ideas, skills, or
          just enthusiasm — come be part of the process.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '12px'
          }}
        >
          <Button variant='contained'>Learn More</Button>

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
        </Box>
      </Box>
    </Box>
  )
}
