'use client'
import { Button } from '@/luna/components'
import { Box } from '@mui/material'
import Link from 'next/link'
import { menuItems } from './_data'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const ItemButton = ({ lable, active }: { lable: string; active: boolean }) => (
  <Button
    variant={active ? 'contained' : 'text'}
    sx={{
      textDecoration: 'none',
      width: '100%',
      height: '36px',
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
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: '32px'
        }}
      >
        <Link href='/' aria-label='Home'>
          <Image
            src='/logo.webp'
            width={140}
            height={40}
            alt='Luna UI Kit Logo'
          />
        </Link>
      </Box>

      {menuItems.pages.map((i, _) => (
        <Link key={_} href={i.link}>
          <ItemButton active={i.link === pathname} lable={i.lable} />
        </Link>
      ))}
    </Box>
  )
}
