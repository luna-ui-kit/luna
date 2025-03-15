'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { Avatar } from '@/luna/components'
import { IconUser } from '@tabler/icons-react'

export default function Page() {
  return (
    <>
      <Avatar sx={{ width: 32, height: 32 }}> <IconUser size={16} /> </Avatar>
      <Avatar sx={{ width: 40, height: 40 }}> <IconUser size={16} /> </Avatar>

      <Avatar sx={{ width: 32, height: 32 }}>H</Avatar>
      <Avatar sx={{ width: 40, height: 40 }}>H</Avatar>

      <Avatar sx={{ width: 32, height: 32 }} alt='' src='/assets/user.jpg' />
      <Avatar sx={{ width: 40, height: 40 }} alt='' src='/assets/user.jpg' />
    </>
  )
}`

export default function AvatarCode() {
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
