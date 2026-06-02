'use client'
import { BlockWrapper, Button, TextField } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import { IconAt, IconMail, IconPhoneCall } from '@tabler/icons-react'

export function EmailOptIn005() {
  const theme = useTheme()

  return (
    <BlockWrapper fullWidth>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          background: theme.palette.background.paper,
          borderRadius: '0',
          padding: '24px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            flexDirection: { xs: 'column', sm: 'row' }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <IconAt size='40px' />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='labelSmall' color='textDisabled'>
                Say Hello
              </Typography>

              <Typography variant='titleSmall' color='textPrimary'>
                demo@luna.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <IconPhoneCall size='40px' />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='labelSmall' color='textDisabled'>
                Support
              </Typography>

              <Typography variant='titleSmall' color='textPrimary'>
                0800 123 45 67
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            gap: '16px',
            maxWidth: '400px'
          }}
        >
          <TextField
            variant='outlined'
            placeholder='Email'
            fullWidth
            slotProps={{
              input: {
                startAdornment: <IconMail />
              }
            }}
          />
          <Button variant='contained'>Subscribe Now</Button>
        </Box>
      </Box>
    </BlockWrapper>
  )
}
