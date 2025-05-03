'use client'
import {
  Box,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  Typography,
  useTheme
} from '@mui/material'
import { Select, InputLabel } from '@/luna/components'
import { useState } from 'react'

export const Overview = () => {
  const theme = useTheme()
  const [age, setAge] = useState<string>()
  const [select, setSelect] = useState<string[]>([])

  const handleChangeAge = (event: SelectChangeEvent<unknown>) =>
    setAge(event.target.value as string)

  const handleChangeSelect = (event: SelectChangeEvent<unknown>) =>
    setSelect(event.target.value as string[])

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      gap='24px'
      padding='24px'
      sx={{ background: theme.palette.background.paper }}
    >
      <Box display='flex' flexDirection='column' gap='4px'>
        <Typography variant='titleMedium'>Select</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='24px'>
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
          <InputLabel id='demo-simple-select-label-2'>Multi Select</InputLabel>
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
    </Box>
  )
}
