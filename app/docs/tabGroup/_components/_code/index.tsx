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
import { SyntheticEvent, useState } from 'react'
import { IosTab, IosTabsGroup, MuiTab, MuiTabsGroup } from '@/luna/components'

export default function Page() {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => setValue(newValue)

  return (
    <>
      <MuiTabsGroup variant='scrollable' value={value} onChange={handleChange}>
        <MuiTab label='Tab 1' />
        <MuiTab label='Tab 2' />
        <MuiTab label='Tab 3' />
      </MuiTabsGroup>

      <IosTabsGroup variant='fullWidth' value={value} onChange={handleChange}>
        <IosTab label='Tab 1' />
        <IosTab label='Tab 2' />
        <IosTab label='Tab 3' />
      </IosTabsGroup>
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
