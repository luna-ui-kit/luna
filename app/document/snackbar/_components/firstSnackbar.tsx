'use client'
import { useState } from 'react'
import { Button, Snackbar } from '@/luna/components'

export const FirstSnackbar = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const action = (
    <Button size='small' variant='contained' onClick={handleClose}>
      UNDO
    </Button>
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
        message='Changes saved'
        action={action}
      />
    </>
  )
}
