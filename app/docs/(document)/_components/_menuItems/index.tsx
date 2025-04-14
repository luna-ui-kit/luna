'use client'
import { Button } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { menuItems } from './_data'
import { usePathname } from 'next/navigation'

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

export const MenuItems = () => {
  const pathname = usePathname()

  return (
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

      <Typography variant='bodySmall' color='textDisabled' sx={{ my: '8px' }}>
        Foundations
      </Typography>

      {menuItems.foundations.map((i, _) => (
        <Link key={_} href={i.link}>
          <ItemButton active={i.link === pathname} lable={i.lable} />
        </Link>
      ))}

      <Typography variant='bodySmall' color='textDisabled' sx={{ my: '8px' }}>
        Components
      </Typography>

      {menuItems.components.map((i, _) => (
        <Link key={_} href={i.link}>
          <ItemButton active={i.link === pathname} lable={i.lable} />
        </Link>
      ))}

      <Typography variant='bodySmall' color='textDisabled' sx={{ my: '8px' }}>
        Pages
      </Typography>

      {menuItems.pages.map((i, _) => (
        <Link key={_} href={i.link}>
          <ItemButton active={i.link === pathname} lable={i.lable} />
        </Link>
      ))}
    </Box>
  )
}
