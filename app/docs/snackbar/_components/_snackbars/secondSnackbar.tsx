'use client'
import { useState } from 'react'
import { Button, Snackbar } from '@/luna/components'
import { IconUserCircle, IconX } from '@tabler/icons-react'
import { Box, IconButton } from '@mui/material'

export const SecondSnackbar = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const action = (
    <IconButton size='small' onClick={handleClose} sx={{ border: 'none' }}>
      <IconX size={20} />
    </IconButton>
  )

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open First Snackbar
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <IconUserCircle />
            Contact list synced
          </Box>
        }
        action={action}
      />
    </>
  )
}
