'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { FormControlLabel, RadioGroup, FormControl } from '@mui/material'
import { Radio } from '@/luna/components'

export default function Page() {
  return (
    <>
      <FormControl>
        <RadioGroup aria-labelledby='demo-radio-buttons-group-label' defaultValue='female' name='radio-buttons-group'>
          <FormControlLabel value='female' control={<Radio />} label='Female' />

          <FormControlLabel value='male' control={<Radio />} label='Male' />

          <FormControlLabel value='other' control={<Radio />} label='Other' />
        </RadioGroup>
      </FormControl>
    </>
  )
}`

export default function RadioGroupCode() {
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
