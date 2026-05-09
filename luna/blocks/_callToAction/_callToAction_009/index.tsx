'use client'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'

export function CallToAction009() {
  const theme = useTheme()

  return (
    <Box sx={{ background: theme.palette.primary.main }}>
      <BlockWrapper>
        <Box
          position='relative'
          display='flex'
          width='100%'
          padding='24px'
          gap='16px'
          height='fit-content'
          minHeight='100px'
          boxSizing='border-box'
          alignItems='center'
          justifyContent='space-between'
          sx={{ flexDirection: { xs: 'column', md: 'row' } }}
        >
          <Typography variant='titleSmall' color='white'>
            Build faster, design smarter.
          </Typography>

          <Button variant='secondary'>View Demo</Button>
        </Box>
      </BlockWrapper>
    </Box>
  )
}
