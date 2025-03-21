'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { Chip } from '@/luna/components'

export default function Page() {
  return (
    <>
      <Chip label='Filled' variant='filled' />
      <Chip label='Filled Primary' variant='filled' color='primary' />
      <Chip label='Filled Secondary' variant='filled' color='secondary' />

      <Chip label='Outlined' variant='outlined' />
      <Chip label='Outlined Primary' variant='outlined' color='primary' />
      <Chip label='Outlined Secondary' variant='outlined' color='secondary' />
    </>
  )
}`

export default function ChipCode() {
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
