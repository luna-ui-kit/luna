'use client'
import { BlockWrapper, Button, Checkbox } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'

export function CallToAction006() {
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
              See It in Action
            </Typography>

            <Typography variant='headlineLarge' color='textPrimary'>
              Innovative designs transform websites into platforms.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              backgroundColor: theme.palette.background.paper,
              padding: '24px',
              borderRadius: '24px'
            }}
          >
            <Typography variant='titleMedium' color='textPrimary'>
              Intuitive user interfaces enhance overall site usability.
            </Typography>

            <Typography variant='bodyMedium' color='textSecondary'>
              We’re open-source and always evolving. If you’ve got ideas,
              skills, or just enthusiasm — come be part of the process.
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

            <Button
              variant='contained'
              sx={{ marginTop: '8px', width: '100%' }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
