'use client'
import { Box, Typography, useTheme } from '@mui/material'
import ButtonCode from '../_code/buttonCode'
import { Button } from '@/luna/components'

export const ButtonSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Button'
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
        <Typography variant='titleSmall'>Button</Typography>

        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>
          <Button variant='link'>Link</Button>
          <Button variant='secondary'>Secondary</Button>
          <Button variant='text'>Text</Button>
        </Box>

        <ButtonCode />
      </Box>
    </Box>
  )
}
