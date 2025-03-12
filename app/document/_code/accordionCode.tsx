'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { Accordions } from '@/luna/components'

export const data = [
  {
    expanded: 'item1',
    title: 'Item 1',
    detail: 'detail...'
  },
  {
    expanded: 'item2',
    title: 'Item 2',
    detail: 'detail...'
  },
  {
    expanded: 'item3',
    title: 'Item 3',
    detail: 'detail...'
  }
]

export default function Page() {
  return <Accordions data={data} />
}`

export default function AccordionCode() {
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
