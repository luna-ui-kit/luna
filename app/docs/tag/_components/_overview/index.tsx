'use client'
import { Tag } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'

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
        <Typography variant='titleMedium'>Tag</Typography>
      </Box>

      <Box display='flex' flexWrap='wrap' gap='12px' alignItems='baseline'>
        <Tag label='text' color='grey' />
        <Tag label='text' variant='outlined' color='grey' />
        <Tag label='text' color='green' />
        <Tag label='text' variant='outlined' color='green' />
        <Tag label='text' color='lunaRed' />
        <Tag label='text' variant='outlined' color='lunaRed' />
        <Tag label='text' color='yellow' />
        <Tag label='text' variant='outlined' color='yellow' />{' '}
        <Tag label='text' color='blue' />
        <Tag label='text' variant='outlined' color='blue' />
        <Tag label='text' color='pink' />
        <Tag label='text' variant='outlined' color='pink' />
        <Tag label='text' color='lunaPurple' />
        <Tag label='text' variant='outlined' color='lunaPurple' />
        <Tag label='text' color='lime' />
        <Tag label='text' variant='outlined' color='lime' />
        <Tag label='text' color='teal' />
        <Tag label='text' variant='outlined' color='teal' />
        <Tag label='text' color='brown' />
        <Tag label='text' variant='outlined' color='brown' />
      </Box>
    </Box>
  )
}
