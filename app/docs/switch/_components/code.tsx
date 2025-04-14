'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { FormControlLabel, FormGroup } from '@mui/material'
import { Switch } from '@/luna/components'

export default function Page() {
  return (
    <>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label='Label' />

        <FormControlLabel required control={<Switch />} label='Required' />

        <FormControlLabel disabled control={<Switch />} label='Disabled' />
      </FormGroup>
    </>
  )
}`

export default function SwitchCode() {
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
