'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { Fab } from '@/luna/components'
import { IconPlus } from '@tabler/icons-react'

export default function Page() {
  return (
    <>
      <Fab size='small' color='primary'> <IconPlus /> </Fab>
      <Fab size='small' color='secondary'> <IconPlus /> </Fab>

      <Fab size='medium' color='primary'> <IconPlus /> </Fab>
      <Fab size='medium' color='secondary'> <IconPlus /> </Fab>

      <Fab size='large' color='primary'> <IconPlus /> </Fab>
      <Fab size='large' color='secondary'> <IconPlus /> </Fab>
    </>
  )
}`

export default function FABCode() {
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
