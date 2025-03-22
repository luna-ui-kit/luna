'use client'
import { useState } from 'react'
import { Button, Dialog } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import { IconMoon } from '@tabler/icons-react'

export const ThirdDialog = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open Third Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            textAlign: 'center',
            maxWidth: '320px'
          }}
        >
          <IconMoon size={56} style={{ margin: '0 auto 24px' }} />

          <Typography variant='titleMedium'>Dark mode</Typography>

          <Typography variant='bodySmall'>
            Just letting you know that we have dark mode. You Should give a try!
            Maybe you like it more.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', mt: '24px' }}>
          <Button variant='contained' sx={{ width: '100%' }}>
            Keep Using Light Mode
          </Button>

          <Button variant='secondary' sx={{ width: '100%' }}>
            Try Dark Mode
          </Button>
        </Box>
      </Dialog>
    </>
  )
}
