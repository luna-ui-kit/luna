'use client'
import { Button } from '@/luna/components'
import { Box, Grid2 as Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { menuItems } from '../../_data/menuItems'
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

export const Sidebar = () => {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <Grid
      size={{ xs: 12, sm: 12, md: 3 }}
      sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, py: '8px' }}
    >
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
    </Grid>
  )
}
