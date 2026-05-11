import { BlockWrapper } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { CountersData } from '../__data'
import React from 'react'

export const Counter004 = () => {
  const theme = useTheme()

  return (
    <BlockWrapper
      fullWidth
      sx={{
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
            textAlign: 'center',
            m: 'auto auto 32px auto',
            width: '100%',
            maxWidth: '720px'
          }}
        >
          <Typography variant='headlineLarge' color='textPrimary'>
            Why Luna
          </Typography>

          <Typography variant='bodyMedium' color='textSecondary'>
            Everything you need in one place
          </Typography>
        </Box>

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
      </Box>
    </BlockWrapper>
  )
}
