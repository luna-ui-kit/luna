'use client'
import { Box, Paper, Typography } from '@mui/material'

const levels = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24
]

export const Levels = () => {
  return (
    <Box display='flex' gap='16px' flexWrap='wrap'>
      {levels.map((level, _) => (
        <Paper
          key={_}
          elevation={level}
          sx={{
            width: '64px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px'
          }}
        >
          <Typography variant='bodySmall'>{level}</Typography>
        </Paper>
      ))}
    </Box>
  )
}
