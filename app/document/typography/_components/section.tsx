'use client'
import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

export const TypographySection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Typography'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        gap: '24px',
        padding: '24px',
        border: `1px solid ${theme.palette.grey[300]}`,
        background: theme.palette.background.paper
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>Typography</Typography>

        <Typography variant='bodySmall'>
          It&apos;s based on MUI 3 and seamlessly integrated into the default
          options of MUI 2. While you can use both versions, we strongly
          recommend switching to this new version for both design and
          development.
        </Typography>

        <Box
          sx={{ display: 'flex', gap: '16px', mt: '16px', flexWrap: 'wrap' }}
        >
          <Link
            target='_blank'
            href={'https://m3.material.io/styles/typography/type-scale-tokens'}
          >
            <Button variant='outlined'>Material Design 3</Button>
          </Link>

          <Link
            target='_blank'
            href={
              'https://mui.com/material-ui/react-typography/?srsltid=AfmBOorD-ewkNxfHb5AA9YeCsp-Y-qpV7UtVm6WKUDrP4H0SwM_TwuJy'
            }
          >
            <Button variant='outlined'>Mui Typography</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
