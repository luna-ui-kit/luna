'use client'
import { Box, Typography, useTheme } from '@mui/material'
import home001 from '@/public/screenshot/homepage001.webp'
import home002 from '@/public/screenshot/homepage002.webp'
import Image from 'next/image'
import Link from 'next/link'

export const HomepageSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Homepage'
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
          gap: '16px'
        }}
      >
        <Typography variant='titleSmall'>Homepage</Typography>

        <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
    </Box>
  )
}
