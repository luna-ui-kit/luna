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
import { CircularProgress, LinearProgress } from '@mui/material'

export default function Page() {
  return (
    <>
      <CircularProgress size={32} variant='determinate' value={75} />
    
      <LinearProgress variant='determinate' value={75} sx={{ borderRadius: '4px' }} />
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

            <IconButton aria-label='Show Code'>
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
