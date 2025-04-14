'use client'
import { Grid2 as Grid } from '@mui/material'
import { MenuItems } from '../_menuItems'

export const Sidebar = () => {
  return (
    <Grid
      size={{ xs: 12, sm: 12, md: 3 }}
      display={{ xs: 'none', sm: 'none', md: 'flex' }}
      py='8px'
    >
      <MenuItems />
    </Grid>
  )
}
