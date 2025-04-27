'use client'
import { Table } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { Data } from './_table/_data'
import { Columns } from './_table/_columns'

export const Overview = () => {
  const theme = useTheme()

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
        <Typography variant='titleMedium'>Table</Typography>
      </Box>

      <Table data={Data} columns={Columns} />
    </Box>
  )
}
