'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
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
        Open Second Snackbar
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
`

export default function SecondSnackbarCode() {
  const [code, setCode] = useState<undefined | string>()

  useEffect(() => {
    codeToHtml(codeSnippet, {
      lang: 'javascript',
      theme: 'dracula'
    }).then(data => setCode(data))
  }, [])

  return code ? (
    <div dangerouslySetInnerHTML={{ __html: code }}></div>
  ) : (
    <Typography variant='bodySmall' color='textDisabled' sx={{ mY: '16px' }}>
      Loading...
    </Typography>
  )
}
