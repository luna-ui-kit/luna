'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Breadcrumbs } from '@/luna/components'
import { IconFileDescription, IconFolder, IconHome } from '@tabler/icons-react'
import BreadcrumbCode from './code'

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

export const BreadcrumbSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Breadcrumb'
      sx={{
        borderRadius: '24px',
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
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>Breadcrumb</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '16px',
            flexWrap: 'wrap'
          }}
        >
          <Breadcrumbs data={breadcrumbLinks1} />
          <Breadcrumbs data={breadcrumbLinks2} />
        </Box>

        <BreadcrumbCode />
      </Box>
    </Box>
  )
}
