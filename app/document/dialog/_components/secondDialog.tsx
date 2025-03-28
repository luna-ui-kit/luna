'use client'
import { useState } from 'react'
import { Button, Dialog } from '@/luna/components'
import { Box, IconButton, Typography } from '@mui/material'
import { IconConfetti, IconDownload, IconX } from '@tabler/icons-react'
import { green } from '@mui/material/colors'

export const SecondDialog = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open Second Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            textAlign: 'center'
          }}
        >
          <IconConfetti
            size={56}
            color={green[500]}
            style={{ margin: '0 auto 24px' }}
          />

          <IconButton
            onClick={handleClose}
            size='small'
            sx={{
              border: 'none',
              position: 'absolute',
              right: '8px',
              top: '8px'
            }}
          >
            <IconX />
          </IconButton>

          <Typography variant='titleMedium'>
            Congratulations! You’ve completed your Document.
          </Typography>

          <Typography variant='bodySmall'>
            Now you can download signed PDF version of this document. The link
            will expire after 30 days.
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', mt: '24px' }}>
          <Button variant='contained' endIcon={<IconDownload color='white' />}>
            Download PDF
          </Button>
        </Box>
      </Dialog>
    </>
  )
}
