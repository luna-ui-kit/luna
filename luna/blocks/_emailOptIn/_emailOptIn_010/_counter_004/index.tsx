import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { CountersData } from './__data'

export const Counter004 = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '24px'
      }}
    >
      {CountersData.map((counter, _) => (
        <React.Fragment key={_}>
          {_ < 3 && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                borderRadius: '12px',
                padding: '24px',
                border: `1px solid ${theme.palette.divider}`,
                boxSizing: 'border-box'
              }}
            >
              <Typography variant='labelMedium' color='textSecondary'>
                {counter.title}
              </Typography>

              <Typography variant='headlineLarge' color='textPrimary'>
                {counter.amount}+
              </Typography>

              <Typography variant='bodyMedium' color='textSecondary'>
                {counter.description}
              </Typography>
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  )
}
