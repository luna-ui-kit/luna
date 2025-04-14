'use client'
import { Typography } from '@mui/material'
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

export default function ProgressCode() {
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
