'use client'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

const codeSnippet = `// Usage:
import { useState } from 'react'
import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material'
import { InputLabel, Select } from '@/luna/components'

export default function Page() {
  const [age, setAge] = useState<string>()
  const [select, setSelect] = useState<string[]>([])

  const handleChangeAge = (event: SelectChangeEvent<unknown>) => setAge(event.target.value as string)
  const handleChangeSelect = (event: SelectChangeEvent<unknown>) => setSelect(event.target.value as string[])

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Age</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='Age' onChange={handleChangeAge} >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label-2'>
          Multi Select
        </InputLabel>
        <Select labelId='demo-simple-select-label-2' id='demo-simple-select-2' value={select} label='Multi Select' onChange={handleChangeSelect} multiple >
          <MenuItem value={'Kathryn'}>Kathryn Murphy</MenuItem>
          <MenuItem value={'Jacob'}>Jacob Jones</MenuItem>
          <MenuItem value={'Robert'}>Robert Fox</MenuItem>
          <MenuItem value={'Cody'}>Cody Fisher</MenuItem>
          <MenuItem value={'Cameron'}>Cameron Williamson</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}`

export default function SelectCode() {
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
