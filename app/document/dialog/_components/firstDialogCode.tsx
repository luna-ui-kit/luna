'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
'use client'
import { useState } from 'react'
import { Button, Dialog } from '@/luna/components'
import { Box, Typography } from '@mui/material'

export const FirstDialog = () => {
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'center' }} >
          <Typography variant='titleMedium'>
            Your account was created
          </Typography>

          <Typography variant='bodySmall'>
            Congratulations! You just created an account. Now you can log in or
            save password for later.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '24px' }}>
          <Button variant='secondary'>Save Password</Button>
          <Button variant='contained'>Login Now</Button>
        </Box>
      </Dialog>
    </>
  )
}`

export default function FirstDialogCode() {
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
