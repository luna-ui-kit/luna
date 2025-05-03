'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
'use client'
import { useState } from 'react'
import { Button, Snackbar } from '@/luna/components'
import { IconWifiOff, IconX } from '@tabler/icons-react'
import { Box, IconButton, useTheme } from '@mui/material'
import { Shadows } from '@/luna/theme/shadows'

export const ThirdSnackbar = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open Third Snackbar
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '24px',
            alignItems: 'center',
            background: theme.palette.secondary.main,
            color: theme.palette.grey[900],
            boxShadow: Shadows.shadows[15],
            borderRadius: '16px',
            padding: '6px 16px',
            minHeight: '44px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              color: 'white'
            }}
          >
            <IconWifiOff color='white' />
            No internet connection
          </Box>

          <Box display='flex' gap='12px'>
            <Button size='small' variant='text' sx={{ color: 'white' }}>
              Retry
            </Button>

            <IconButton
              size='small'
              onClick={handleClose}
              sx={{ border: 'none' }}
            >
              <IconX size={20} color='white' />
            </IconButton>
          </Box>
        </Box>
      </Snackbar>
    </>
  )
}
`

export default function ThirdSnackbarCode() {
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
