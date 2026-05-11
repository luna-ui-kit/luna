'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'
import { CountersData } from '../__data'
import React from 'react'

export function Counter010() {
  return (
    <BlockWrapper fullWidth>
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 'fit-content'
          }}
        >
          <Box display='flex'>
            <Image
              src={image}
              alt=''
              style={{
                objectFit: 'cover',
                borderRadius: '12px',
                height: 'auto',
                width: '100%'
              }}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              borderRadius: '24px',
              boxSizing: 'border-box'
            }}
          >
            <Typography variant='titleSmall' color='textDisabled'>
              Stop reinventing the wheel
            </Typography>
            <Typography variant='headlineLarge' color='textPrimary'>
              Build Once, Use Everywhere
            </Typography>
            <Typography variant='bodyMedium' color='textSecondary'>
              Save time and reduce repetition. With a system built on reusable
              components, you can create once and reuse across all your projects
              — without losing control over the details.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                mt: '24px',
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
                        width: '100%'
                      }}
                    >
                      <Typography variant='labelMedium' color='textSecondary'>
                        {counter.title}
                      </Typography>

                      <Typography variant='headlineLarge' color='textPrimary'>
                        {counter.amount}+
                      </Typography>
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>{' '}
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
