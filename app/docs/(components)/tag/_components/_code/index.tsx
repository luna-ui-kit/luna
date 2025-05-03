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
import { Tag } from '@/luna/components'

export default function Page() {
  return (
    <>
      <Tag label='text' color='grey' />
      <Tag label='text' variant='outlined' color='grey' />
      <Tag label='text' color='green' />
      <Tag label='text' variant='outlined' color='green' />
      <Tag label='text' color='lunaRed' />
      <Tag label='text' variant='outlined' color='lunaRed' />
      <Tag label='text' color='yellow' />
      <Tag label='text' variant='outlined' color='yellow' />{' '}
      <Tag label='text' color='blue' />
      <Tag label='text' variant='outlined' color='blue' />
      <Tag label='text' color='pink' />
      <Tag label='text' variant='outlined' color='pink' />
      <Tag label='text' color='lunaPurple' />
      <Tag label='text' variant='outlined' color='lunaPurple' />
      <Tag label='text' color='lime' />
      <Tag label='text' variant='outlined' color='lime' />
      <Tag label='text' color='teal' />
      <Tag label='text' variant='outlined' color='teal' />
      <Tag label='text' color='brown' />
      <Tag label='text' variant='outlined' color='brown' />
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
