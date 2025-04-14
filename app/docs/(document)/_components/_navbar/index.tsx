'use client'
import { BlockWrapper } from '@/luna/components'
import { AppBar, Box, IconButton, Typography, useTheme } from '@mui/material'
import { IconMenu2 } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useDrawerStore } from '../_drawer/store'

export function Navbar() {
  const { handleDrawerToggle } = useDrawerStore(state => state)
  const theme = useTheme()

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.grey[200]}`
      }}
      elevation={0}
    >
      <BlockWrapper>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '64px',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <IconButton
              sx={{ display: { sm: 'flex', md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <IconMenu2 />
            </IconButton>

            <Link href='/'>
              <Image src='/logo.webp' alt='' width={83} height={24} />
            </Link>
          </Box>

          <Typography variant='bodySmall'>v2</Typography>
        </Box>
      </BlockWrapper>
    </AppBar>
  )
}
