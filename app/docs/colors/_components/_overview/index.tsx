'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Button } from '@/luna/components'
import Link from 'next/link'

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
        <Typography variant='titleMedium'>Colors</Typography>

        <Typography variant='bodyMedium'>
          This system uses MUI&apos;s foundation, so it&apos;s easy to scale and
          works great for keeping things consistent. You get a full set of
          primary, secondary, and neutral colors ready to go.
        </Typography>
      </Box>

      <Box display='flex' flexDirection='column' gap='4px'>
        <Typography variant='titleMedium'>Make it your own</Typography>

        <Typography variant='bodyMedium'>
          Change what you need to match your brand. Everything&apos;s tied to
          the MUI theme, so updating it in code is quick and smooth.
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
          href={'https://mui.com/material-ui/customization/color/'}
        >
          <Button variant='link'>MUI Color System</Button>
        </Link>
      </Box>
    </Box>
  )
}
