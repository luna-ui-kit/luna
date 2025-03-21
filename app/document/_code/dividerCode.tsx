'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { Divider } from '@/luna/components'

export default function Page() {
  return (
    <>
      <Divider />
      <Divider sx={{ borderStyle: 'dashed', borderBottomWidth: '2px' }} />
      <Divider sx={{ borderStyle: 'dotted', borderBottomWidth: '2px' }} />

      <Divider orientation='vertical' sx={{ height: '40px' }} />
      <Divider orientation='vertical' sx={{ borderStyle: 'dashed', borderRightWidth: '2px', height: '40px' }} />
      <Divider orientation='vertical' sx={{ borderStyle: 'dotted', borderRightWidth: '2px', height: '40px' }} />
    </>
  )
}`

export default function DividerCode() {
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
