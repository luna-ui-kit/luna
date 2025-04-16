'use client'
import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

export const Customize = () => {
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
        <Typography variant='titleMedium'>How To Customize</Typography>

        <Typography variant='bodyMedium'>
          For customization, just head to the files in the paths below. If you
          need more details, the MUI docs have you covered.
        </Typography>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        gap='16px'
        padding='16px'
        borderRadius='12px'
        sx={{ background: theme.palette.grey[200] }}
      >
        <Typography variant='bodySmall'>@/luna/components/chip</Typography>
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
          href={'https://mui.com/material-ui/customization/how-to-customize/'}
        >
          <Button variant='link'>MUI Customization</Button>
        </Link>
      </Box>
    </Box>
  )
}
