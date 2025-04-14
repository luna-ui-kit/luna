'use client'
import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { Levels } from '../_levels'

export const ElevationSection = () => {
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
        <Typography variant='titleMedium'>Elevation</Typography>

        <Typography variant='bodyMedium'>
          The elevation system is built on MUI&apos;s foundation, using soft
          grey shadows to create depth and hierarchy. It&apos;s designed to be
          clean and subtle, but you&apos;re free to add more layers or customize
          it to fit your project&apos;s vibe. Go ahead, make it your own.
        </Typography>
      </Box>

      <Box
        display='flex'
        gap='8px'
        justifyContent='space-between'
        alignItems='center'
        flexWrap='wrap'
        border={`1px solid ${theme.palette.grey[300]}`}
        borderRadius='16px'
        padding='16px'
      >
        <Typography variant='labelMedium'>Learn more</Typography>

        <Link
          target='_blank'
          href={
            'https://mui.com/material-ui/react-paper/?srsltid=AfmBOoqhqDX2Lg_c6Yd-_fC5yyekyyMSExa3khpvyleCyC7EYvF1-hA9'
          }
        >
          <Button variant='link'>MUI Elevation</Button>
        </Link>
      </Box>

      <Levels />
    </Box>
  )
}
