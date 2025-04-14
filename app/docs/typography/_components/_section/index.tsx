'use client'
import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

export const TypographySection = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>Typography</Typography>

          <Typography variant='bodyMedium'>
            It&apos;s built on MUI 3 and fits perfectly with the default options
            in MUI 2. You can use both, but we definitely recommend switching to
            this new version for both design and development. designs stand out.
          </Typography>
        </Box>

        <Box
          display='flex'
          gap='8px'
          justifyContent='space-between'
          alignItems='center'
          flexWrap='wrap'
          border={`1px solid ${theme.palette.grey[300]}`}
          borderRadius='16px'
          padding='16px'
        >
          <Typography variant='labelMedium'>Material Design 3</Typography>

          <Link
            target='_blank'
            href={'https://m3.material.io/styles/typography/type-scale-tokens'}
          >
            <Button variant='link'>Click Here</Button>
          </Link>
        </Box>

        <Box
          display='flex'
          gap='8px'
          justifyContent='space-between'
          alignItems='center'
          flexWrap='wrap'
          border={`1px solid ${theme.palette.grey[300]}`}
          borderRadius='16px'
          padding='16px'
        >
          <Typography variant='labelMedium'>
            Mui Typography (Not Recommended)
          </Typography>

          <Link
            target='_blank'
            href={
              'https://mui.com/material-ui/react-typography/?srsltid=AfmBOorD-ewkNxfHb5AA9YeCsp-Y-qpV7UtVm6WKUDrP4H0SwM_TwuJy'
            }
          >
            <Button variant='link'>Click Here</Button>
          </Link>
        </Box>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Typography variant='displayLarge'>displayLarge</Typography>
        <Typography variant='displayMedium'>displayMedium</Typography>
        <Typography variant='displaySmall'>displaySmall</Typography>
        <Typography variant='headlineLarge'>headlineLarge</Typography>
        <Typography variant='headlineMedium'>headlineMedium</Typography>
        <Typography variant='headlineSmall'>headlineSmall</Typography>
        <Typography variant='titleLarge'>titleLarge</Typography>
        <Typography variant='titleMedium'>titleMedium</Typography>
        <Typography variant='titleSmall'>titleSmall</Typography>
        <Typography variant='bodyLarge'>bodyLarge</Typography>
        <Typography variant='bodyMedium'>bodyMedium</Typography>
        <Typography variant='bodySmall'>bodySmall</Typography>
        <Typography variant='bodyExtraSmall'>bodyExtraSmall</Typography>
        <Typography variant='labelExtraLarge'>labelExtraLarge</Typography>
        <Typography variant='labelLarge'>labelLarge</Typography>
        <Typography variant='labelMedium'>labelMedium</Typography>
        <Typography variant='labelSmall'>labelSmall</Typography>
        <Typography variant='labelExtraSmall'>labelExtraSmall</Typography>
      </Box>
    </>
  )
}
