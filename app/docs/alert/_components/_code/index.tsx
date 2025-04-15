'use client'
import {
  Box,
  CircularProgress,
  IconButton,
  Typography,
  useTheme
} from '@mui/material'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { IconButton, Typography } from '@mui/material'
import { Alert, Button } from '@/luna/components'
import { IconCircleCheck, IconEyeglass2, IconInfoSquareRounded, IconX } from '@tabler/icons-react'

export default function Page() {
  return (
    <>
      <Alert
        icon={<IconCircleCheck />}
        severity='success'
        action={
          <IconButton color='inherit' size='small'>
            <IconX />
          </IconButton>
        }
      >
        <Typography variant='titleSmall' color='inherit'>Congratulations!</Typography>
        <Typography variant='bodySmall'>Your OS has been updated to the latest version. Current OS Version 4.3.17863.289</Typography>
      </Alert>

      <Alert icon={<IconInfoSquareRounded />} severity='info'>
        <Typography variant='titleSmall' color='inherit'>Did you know?</Typography>
        <Typography variant='bodySmall'>You can now switch screen by pressing WIN + SHIFT</Typography>
      </Alert>

       <Alert icon={<IconEyeglass2 />} severity='warning'>
        <Typography variant='titleSmall' color='inherit'>Warning</Typography>
        <Typography variant='bodySmall'>Careful! please, never look behind... i said NEVER!</Typography>
      </Alert>

      <Alert
        icon={false}
        severity='error'
        action={
          <Button variant='contained' size='small'>
            Turn On
          </Button>
        }
      >
        <Typography variant='titleSmall' color='inherit'>Something went wrong!</Typography>
        <Typography variant='bodySmall'>Your device turned off unexpectedly.</Typography>
      </Alert>
    </>
  )
}`

export default function Code() {
  const [code, setCode] = useState<undefined | string>()
  const [isHidden, setIsHidden] = useState(true)
  const theme = useTheme()

  useEffect(() => {
    codeToHtml(codeSnippet, {
      lang: 'javascript',
      theme: 'dracula'
    }).then(data => setCode(data))
  }, [])

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      gap='16px'
      padding='24px'
      sx={{ background: theme.palette.background.paper }}
    >
      {code ? (
        <>
          <Box
            display='flex'
            gap='4px'
            alignItems='center'
            justifyContent='space-between'
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setIsHidden(state => !state)
            }}
          >
            <Typography variant='titleMedium'>Code</Typography>

            <IconButton>
              {isHidden ? <IconChevronDown /> : <IconChevronUp />}
            </IconButton>
          </Box>

          {!isHidden && <Box dangerouslySetInnerHTML={{ __html: code }}></Box>}
        </>
      ) : (
        <Box display='flex' gap='8px' alignItems='center' alignSelf='center'>
          <CircularProgress size={16} />
          <Typography variant='bodySmall'>Loading...</Typography>
        </Box>
      )}
    </Box>
  )
}
