'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { IconFileDescription, IconFolder, IconHome } from '@tabler/icons-react'
import { Breadcrumbs } from '@/luna/components'

const breadcrumbLinks1 = {
  links: [
    { url: '#', label: 'Home', icon: <IconHome /> }
  ],
  current: { label: 'About Us', icon: null }
}

const breadcrumbLinks2 = {
  links: [
    { url: '#', label: 'Program files', icon: <IconFolder /> },
    { url: '#', label: 'Common files', icon: <IconFolder /> }
  ],
  current: { label: 'Filename.pdf', icon: <IconFileDescription /> }
}

export default function Page() {
  return (
    <>
      <Breadcrumbs data={breadcrumbLinks1} />
      <Breadcrumbs data={breadcrumbLinks2} />
    </>
  )
}`

export default function BreadcrumbCode() {
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
