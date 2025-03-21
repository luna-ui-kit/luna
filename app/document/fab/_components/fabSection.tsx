'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Fab } from '@/luna/components'
import { IconPlus } from '@tabler/icons-react'
import FABCode from './fabCode'

export const FABSection = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        borderRadius: '24px',
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
          gap: '12px'
        }}
      >
        <Typography variant='titleSmall'>
          FAB (Floating Action Button)
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Fab size='small' color='primary'>
            <IconPlus />
          </Fab>

          <Fab size='small' color='secondary'>
            <IconPlus />
          </Fab>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Fab size='medium' color='primary'>
            <IconPlus />
          </Fab>

          <Fab size='medium' color='secondary'>
            <IconPlus />
          </Fab>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Fab size='large' color='primary'>
            <IconPlus />
          </Fab>

          <Fab size='large' color='secondary'>
            <IconPlus />
          </Fab>
        </Box>

        <FABCode />
      </Box>
    </Box>
  )
}
