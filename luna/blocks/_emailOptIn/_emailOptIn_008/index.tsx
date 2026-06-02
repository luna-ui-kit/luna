'use client'
import { BlockWrapper, Button, Checkbox, TextField } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { IconMail, IconUser } from '@tabler/icons-react'

export function EmailOptIn008() {
  const theme = useTheme()

  return (
    <BlockWrapper fullWidth>
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '24px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              backgroundColor: theme.palette.background.paper,
              padding: '24px',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '360px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                mb: '8px'
              }}
            >
              <Typography variant='headlineSmall' color='textPrimary'>
                Subscribe to our newsletter
              </Typography>

              <Typography variant='bodyMedium' color='textSecondary'>
                Get the latest updates, new components, and design tips straight
                to your inbox.
              </Typography>
            </Box>

            <TextField
              variant='outlined'
              placeholder='Name'
              slotProps={{
                input: {
                  startAdornment: <IconUser />
                }
              }}
            />

            <TextField
              variant='outlined'
              placeholder='Email'
              slotProps={{
                input: {
                  startAdornment: <IconMail />
                }
              }}
            />

            <Button variant='contained' sx={{ width: '100%' }}>
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
