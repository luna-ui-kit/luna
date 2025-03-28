'use client'
import {
  Box,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  Typography,
  useTheme
} from '@mui/material'
import { InputLabel, Select } from '@/luna/components'
import { useState } from 'react'
import SelectCode from './selectCode'

export const SelectSection = () => {
  const theme = useTheme()
  const [age, setAge] = useState<string>()
  const [select, setSelect] = useState<string[]>([])

  const handleChangeAge = (event: SelectChangeEvent<unknown>) =>
    setAge(event.target.value as string)

  const handleChangeSelect = (event: SelectChangeEvent<unknown>) =>
    setSelect(event.target.value as string[])

  return (
    <Box
      sx={{
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '24px',
        border: `1px solid ${theme.palette.grey[300]}`,
        background: theme.palette.background.paper
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>Select</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center'
          }}
        >
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Age</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={age}
              label='Age'
              onChange={handleChangeAge}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label-2'>
              Multi Select
            </InputLabel>
            <Select
              labelId='demo-simple-select-label-2'
              id='demo-simple-select-2'
              value={select}
              label='Multi Select'
              onChange={handleChangeSelect}
              multiple
            >
              <MenuItem value={'Kathryn'}>Kathryn Murphy</MenuItem>
              <MenuItem value={'Jacob'}>Jacob Jones</MenuItem>
              <MenuItem value={'Robert'}>Robert Fox</MenuItem>
              <MenuItem value={'Cody'}>Cody Fisher</MenuItem>
              <MenuItem value={'Cameron'}>Cameron Williamson</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <SelectCode />
      </Box>
    </Box>
  )
}
