'use client'
import { Box, List, Drawer as MuiDrawer } from '@mui/material'
import { MenuItems } from '../_menuItems'
import { useDrawerStore } from './_store'

interface Props {
  window?: () => Window
}

export function Drawer(props: Props) {
  const { isOpen, handleDrawerToggle } = useDrawerStore(state => state)
  const { window } = props
  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List sx={{ padding: '24px' }}>
        <MenuItems />
      </List>
    </Box>
  )

  return (
    <nav>
      <MuiDrawer
        container={container}
        variant='temporary'
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '280px' }
        }}
      >
        {drawer}
      </MuiDrawer>
    </nav>
  )
}
