'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Chip } from '@/luna/components'
import ChipCode from './code'

export const ChipSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Chip'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
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
        <Typography variant='titleSmall'>Chip</Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            alignItems: 'center',
            mt: '12px'
          }}
        >
          <Chip label='Filled' variant='filled' />
          <Chip label='Filled Primary' variant='filled' color='primary' />
          <Chip label='Filled Secondary' variant='filled' color='secondary' />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Chip label='Outlined' variant='outlined' />
          <Chip label='Outlined Primary' variant='outlined' color='primary' />
          <Chip
            label='Outlined Secondary'
            variant='outlined'
            color='secondary'
          />
        </Box>

        <ChipCode />
      </Box>
    </Box>
  )
}
