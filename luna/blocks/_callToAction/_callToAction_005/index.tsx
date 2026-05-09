'use client'
import { Button } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function CallToAction005() {
  return (
    <Box
      position='relative'
      display='flex'
      flexDirection='column'
      width='100%'
      padding='24px'
      gap='16px'
      height='360px'
      boxSizing='border-box'
      alignItems='end'
      justifyContent='end'
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
        padding='16px'
        width='100%'
        maxWidth='360px'
        textAlign='right'
        borderRadius='12px'
        alignItems='flex-end'
      >
        <Typography variant='headlineLarge' color='white'>
          Love design systems? Let’s build together.
        </Typography>

        <Button variant='link' sx={{ marginTop: '8px', color: 'white' }}>
          Learn More
        </Button>
      </Box>
    </Box>
  )
}
