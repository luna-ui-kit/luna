'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { Button } from '@/luna/components'

export default function Page() {
  return (
    <>
      <Button variant='contained'>Contained</Button>

      <Button variant='outlined'>Outlined</Button>

      <Button variant='link'>Link</Button>

      <Button variant='secondary'>Secondary</Button>

      <Button variant='text'>Text</Button>
    </>
  )
}`

export default function ButtonCode() {
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
