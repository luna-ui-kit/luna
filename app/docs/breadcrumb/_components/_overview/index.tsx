'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Breadcrumbs } from '@/luna/components'
import { IconFileDescription, IconFolder, IconHome } from '@tabler/icons-react'

const breadcrumbLinks1 = {
  links: [
    {
      url: '#',
      label: 'Home',
      icon: <IconHome />
    }
  ],
  current: {
    label: 'About Us',
    icon: null
  }
}

const breadcrumbLinks2 = {
  links: [
    {
      url: '#',
      label: 'Program files',
      icon: <IconFolder />
    },
    {
      url: '#',
      label: 'Common files',
      icon: <IconFolder />
    }
  ],
  current: {
    label: 'Filename.pdf',
    icon: <IconFileDescription />
  }
}

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
        <Typography variant='titleMedium'>Breadcrumb</Typography>
      </Box>

      <Box display='flex' flexDirection='column' gap='16px'>
        <Breadcrumbs data={breadcrumbLinks1} />
        <Breadcrumbs data={breadcrumbLinks2} />
      </Box>
    </Box>
  )
}
