'use client'
import { Box, Typography, useTheme } from '@mui/material'
import home001 from '@/public/screenshot/homepage001.webp'
import home002 from '@/public/screenshot/homepage002.webp'
import Link from 'next/link'
import Image from 'next/image'

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
        <Typography variant='titleMedium'>Homepage</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px'>
        <Link
          href={'/homepage/1'}
          style={{ width: 'fit-content', textDecoration: 'none' }}
          target='_blank'
        >
          <Box
            sx={{
              border: `1px solid ${theme.palette.grey[300]}`,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              gap: '12px',
              padding: '16px',
              textAlign: 'center',
              width: '140px',
              ':hover': {
                border: `1px solid ${theme.palette.primary.main}`,
                boxShadow: theme.shadows[10]
              }
            }}
          >
            <Image
              src={home001}
              alt=''
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                objectPosition: 'top center'
              }}
            />
            <Typography variant='bodySmall'>Homepage 001</Typography>
          </Box>
        </Link>

        <Link
          href={'/homepage/2'}
          style={{ width: 'fit-content', textDecoration: 'none' }}
          target='_blank'
        >
          <Box
            sx={{
              border: `1px solid ${theme.palette.grey[300]}`,
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '12px',
              gap: '12px',
              padding: '16px',
              textAlign: 'center',
              width: '140px',
              ':hover': {
                border: `1px solid ${theme.palette.primary.main}`,
                boxShadow: theme.shadows[10]
              }
            }}
          >
            <Image
              src={home002}
              alt=''
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                objectPosition: 'top center'
              }}
            />
            <Typography variant='bodySmall'>Homepage 002</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  )
}
