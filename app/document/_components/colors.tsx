'use client'
import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

export const Colors = () => {
  const theme = useTheme()

  return (
    <Box
      id='Colors'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
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
        <Typography variant='titleSmall'>Colors</Typography>

        <Typography variant='bodySmall'>
          This color system is built on MUI&apos;s foundation, making it super
          flexible and easy to scale. It&apos;s designed to keep your designs
          consistent and cohesive, with a full palette of primary, secondary,
          and neutral colors. Whether you&apos;re tweaking themes or creating
          new components, this system has you covered.
        </Typography>

        <Box sx={{ display: 'flex', gap: '16px', mt: '16px' }}>
          <Link
            target='_blank'
            href={'https://mui.com/material-ui/customization/color/'}
          >
            <Button variant='outlined'>MUI Color System</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
