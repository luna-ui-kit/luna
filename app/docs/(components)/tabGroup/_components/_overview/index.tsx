'use client'
import { SyntheticEvent, useState } from 'react'
import { IosTab, IosTabsGroup, MuiTab, MuiTabsGroup } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'

export const Overview = () => {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

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
        <Typography variant='titleMedium'>Tab Group</Typography>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        gap='24px'
        alignItems='baseline'
      >
        <MuiTabsGroup
          variant='scrollable'
          value={value}
          onChange={handleChange}
        >
          <MuiTab label='Tab 1' />
          <MuiTab label='Tab 2' />
          <MuiTab label='Tab 3' />
        </MuiTabsGroup>

        <IosTabsGroup variant='fullWidth' value={value} onChange={handleChange}>
          <IosTab label='Tab 1' />
          <IosTab label='Tab 2' />
          <IosTab label='Tab 3' />
        </IosTabsGroup>
      </Box>
    </Box>
  )
}
