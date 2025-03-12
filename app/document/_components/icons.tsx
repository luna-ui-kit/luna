'use client'
import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import tablerLogo from '@/public/tabler.png'
import Image from 'next/image'
import IconCode from '../_code/iconCode'

export const Icons = () => {
  const theme = useTheme()

  return (
    <Box
      id='Icons'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
        border: `1px solid ${theme.palette.grey[300]}`,
        background: theme.palette.background.paper
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>Icons</Typography>

        <Typography variant='bodySmall'>
          Let&apos;s use Tabler Icons! With over 4,000 free, open-source icons,
          Tabler gives your website or app a fresh, consistent, and downright
          beautiful look. Whether you&apos;re building a dashboard, a landing
          page, or an app, these icons have got you covered. Time to make your
          designs pop.
        </Typography>

        <Image src={tablerLogo} alt='' width={100} />

        <Box sx={{ display: 'flex', gap: '16px', mt: '16px' }}>
          <Link target='_blank' href={'https://tabler.io/icons'}>
            <Button variant='outlined'>tabler.io/icons</Button>
          </Link>
        </Box>

        <IconCode />
      </Box>
    </Box>
  )
}
