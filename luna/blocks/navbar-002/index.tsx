import { BlockWrapper } from '@/luna/components'
import { AppBar, Box, IconButton, useTheme } from '@mui/material'
import { IconMenu2, IconSearch } from '@tabler/icons-react'
import Image from 'next/image'

export default function Navbar002() {
  const theme = useTheme()

  return (
    <AppBar
      position='static'
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
          <Image src='/Logo.webp' alt='' width={83} height={24} />

          <Box sx={{ display: 'flex', gap: '8px' }}>
            <IconButton>
              <IconSearch />
            </IconButton>

            <IconButton>
              <IconMenu2 />
            </IconButton>
          </Box>
        </Box>
      </BlockWrapper>
    </AppBar>
  )
}
