import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { CountersData } from '../__data'
import React from 'react'

export const Counter005 = () => {
  const theme = useTheme()

  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            m: 'auto auto 32px auto',
            width: '100%'
          }}
        >
          <Typography variant='titleSmall' color='textDisabled'>
            Keep Things Consistent
          </Typography>

          <Typography variant='headlineLarge' color='textPrimary'>
            A unified look without compromising creativity.
          </Typography>

          <Typography variant='bodyMedium' color='textSecondary'>
            A design system isn’t just a collection of components — it’s a set
            of rules that keep everything working together. Luna helps you stay
            consistent across the board without sacrificing creativity.
          </Typography>

          <Button variant='contained' sx={{ mt: '12px' }}>
            Browse the System
          </Button>
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
