'use client'
import { BlockWrapper, Button, Checkbox } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import image from '@/public/assets/image-placeholder.jpg'

export function Content010() {
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

            <Box>
              <Box>
                <Checkbox
                  checked
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                />
                <Typography
                  variant='labelMedium'
                  color='textPrimary'
                  display='inline'
                >
                  Page Design and Optimization
                </Typography>
              </Box>

              <Box>
                <Checkbox
                  checked
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                />
                <Typography
                  variant='labelMedium'
                  color='textPrimary'
                  display='inline'
                >
                  Content Management System Integration
                </Typography>
              </Box>

              <Box>
                <Checkbox
                  checked
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                />
                <Typography
                  variant='labelMedium'
                  color='textPrimary'
                  display='inline'
                >
                  Website Maintenance and Support
                </Typography>
              </Box>

              <Box>
                <Checkbox
                  checked
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                />
                <Typography
                  variant='labelMedium'
                  color='textPrimary'
                  display='inline'
                >
                  Web Compliance Services
                </Typography>
              </Box>
            </Box>

            <Button variant='contained' sx={{ marginTop: '8px' }}>
              Explore Components
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
