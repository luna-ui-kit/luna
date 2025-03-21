'use client'
import { Button } from '@/luna/components'
import { Box, List, Drawer as MuiDrawer, Typography } from '@mui/material'
import { useDrawerStore } from './store'
import Link from 'next/link'
import { menuItems } from '../../_data/menuItems'
import { usePathname } from 'next/navigation'

interface Props {
  window?: () => Window
}

const ItemButton = ({ lable, active }: { lable: string; active: boolean }) => (
  <Button
    variant={active ? 'contained' : 'text'}
    sx={{
      textDecoration: 'none',
      width: '100%',
      height: '32px',
      justifyContent: 'left'
    }}
  >
    {lable}
  </Button>
)

export function Drawer(props: Props) {
  const { isOpen, handleDrawerToggle } = useDrawerStore(state => state)
  const { window } = props
  const container =
    window !== undefined ? () => window().document.body : undefined
  const pathname = usePathname()

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <List sx={{ padding: '24px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '4px'
          }}
        >
          <Link href={menuItems.start.link}>
            <ItemButton
              active={menuItems.start.link === pathname}
              lable={menuItems.start.lable}
            />
          </Link>

          <Typography
            variant='bodySmall'
            color='textDisabled'
            sx={{ my: '8px' }}
          >
            Foundations
          </Typography>

          {menuItems.foundations.map((i, _) => (
            <Link key={_} href={i.link}>
              <ItemButton active={i.link === pathname} lable={i.lable} />
            </Link>
          ))}

          <Typography
            variant='bodySmall'
            color='textDisabled'
            sx={{ my: '8px' }}
          >
            Components
          </Typography>

          {menuItems.components.map((i, _) => (
            <Link key={_} href={i.link}>
              <ItemButton active={i.link === pathname} lable={i.lable} />
            </Link>
          ))}

          <Typography
            variant='bodySmall'
            color='textDisabled'
            sx={{ my: '8px' }}
          >
            Pages
          </Typography>

          {menuItems.pages.map((i, _) => (
            <Link key={_} href={i.link}>
              <ItemButton active={i.link === pathname} lable={i.lable} />
            </Link>
          ))}
        </Box>
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
