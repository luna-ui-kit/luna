'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { AppBar, Box, IconButton, useTheme } from '@mui/material'
import { IconMenu2, IconSearch } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuLinks } from './menu'

export function Navbar001() {
  const theme = useTheme()

  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: theme.palette.background.paper }}
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
          <Link href='/'>
            <Image src='/Logo.webp' alt='' width={83} height={24} />
          </Link>

          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {MenuLinks.map((menuItem, i) => (
                <Button
                  component='a'
                  key={i}
                  href={menuItem.link}
                  variant='text'
                >
                  {menuItem.name}
                </Button>
              ))}
            </Box>

            <IconButton>
              <IconSearch />
            </IconButton>

            <IconButton sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconMenu2 />
            </IconButton>
          </Box>
        </Box>
      </BlockWrapper>
    </AppBar>
  )
}
