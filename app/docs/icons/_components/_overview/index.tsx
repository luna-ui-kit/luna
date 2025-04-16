'use client'
import { Box, Typography, useTheme } from '@mui/material'
import tablerLogo from '@/public/tabler.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/luna/components'

export const Overview = () => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      gap='24px'
      padding='24px'
      sx={{ background: theme.palette.background.paper }}
    >
      <Box display='flex' flexDirection='column' gap='4px'>
        <Typography variant='titleMedium'>Icons</Typography>

        <Typography variant='bodyMedium'>
          Let&apos;s use Tabler Icons. With 4,000+ free, open-source icons,
          Tabler gives your site or app a clean, consistent, and stylish look.
          Whether it&apos;s a dashboard, landing page, or app, these icons will
          make your designs stand out.
        </Typography>

        <Image
          src={tablerLogo}
          alt=''
          width={100}
          style={{ marginTop: '16px' }}
        />
      </Box>

      <Box
        display='flex'
        gap='8px'
        justifyContent='space-between'
        alignItems='center'
        flexWrap='wrap'
        border={`1px solid ${theme.palette.grey[300]}`}
        borderRadius='16px'
        padding='16px'
      >
        <Typography variant='labelMedium'>Browse all icons on:</Typography>

        <Link target='_blank' href={'https://tabler.io/icons'}>
          <Button variant='link'>tabler.io/icons</Button>
        </Link>
      </Box>
    </Box>
  )
}
