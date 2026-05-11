'use client'
import { Box, IconButton, Drawer as MuiDrawer, Typography } from '@mui/material'
import { useDrawerStore } from './_store'
import { IconX } from '@tabler/icons-react'
import { TextField, InputLabel, Select, Button } from '@/luna/components'
import { useState } from 'react'
import { FormControl, MenuItem, SelectChangeEvent } from '@mui/material'

interface Props {
  window?: () => Window
}

export function Drawer(props: Props) {
  const { isOpen, handleDrawerToggle } = useDrawerStore(state => state)
  const { window } = props
  const container =
    window !== undefined ? () => window().document.body : undefined

  const [sort, setSort] = useState<string>('new')
  const [category, setCategory] = useState<string[]>(['Tech', 'Figma'])

  const handleChangeAge = (event: SelectChangeEvent<unknown>) =>
    setSort(event.target.value as string)
  const handleChangeSelect = (event: SelectChangeEvent<unknown>) =>
    setCategory(event.target.value as string[])

  const drawer = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '16px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='titleMedium' color='textPrimary'>
          Filter & Sort
        </Typography>

        <IconButton onClick={handleDrawerToggle}>
          <IconX size={16} />
        </IconButton>
      </Box>

      <TextField variant='outlined' label='Name' />

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Sort</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={sort}
          label='Sort'
          onChange={handleChangeAge}
        >
          <MenuItem value={'new'}>Newest</MenuItem>
          <MenuItem value={'best'}>Best Option</MenuItem>
          <MenuItem value={'old'}>Oldest</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label-2'>Category</InputLabel>
        <Select
          labelId='demo-simple-select-label-2'
          id='demo-simple-select-2'
          value={category}
          label='Category'
          onChange={handleChangeSelect}
          multiple
        >
          <MenuItem value={'Tech'}>Tech</MenuItem>
          <MenuItem value={'Figma'}>Figma</MenuItem>
          <MenuItem value={'UI'}>UI</MenuItem>
        </Select>
      </FormControl>

      <Button variant='contained' sx={{ width: '100%' }}>
        Show Result (12)
      </Button>
    </Box>
  )

  return (
    <nav>
      <MuiDrawer
        container={container}
        variant='temporary'
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '280px' }
        }}
      >
        {drawer}
      </MuiDrawer>
    </nav>
  )
}
