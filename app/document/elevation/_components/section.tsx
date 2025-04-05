'use client'
import { Button } from '@/luna/components'
import { Box, Paper, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

export const ElevationSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Elevation'
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
        <Typography variant='titleSmall'>Elevation</Typography>

        <Typography variant='bodySmall'>
          The elevation system is built on MUI&apos;s foundation, using soft
          grey shadows to create depth and hierarchy. It&apos;s designed to be
          clean and subtle, but you&apos;re free to add more layers or customize
          it to fit your project&apos;s vibe. Go ahead, make it your own.
        </Typography>

        <Box sx={{ display: 'flex', gap: '16px', mt: '16px' }}>
          <Link
            target='_blank'
            href={
              'https://mui.com/material-ui/react-paper/?srsltid=AfmBOoqhqDX2Lg_c6Yd-_fC5yyekyyMSExa3khpvyleCyC7EYvF1-hA9'
            }
          >
            <Button variant='outlined'>MUI Elevation</Button>
          </Link>
        </Box>

        <Box
          sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px', mt: '24px' }}
        >
          <Paper
            elevation={1}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            01
          </Paper>
          <Paper
            elevation={2}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            02
          </Paper>
          <Paper
            elevation={3}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            03
          </Paper>
          <Paper
            elevation={4}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            04
          </Paper>
          <Paper
            elevation={5}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            05
          </Paper>
          <Paper
            elevation={6}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            06
          </Paper>
          <Paper
            elevation={7}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            07
          </Paper>
          <Paper
            elevation={8}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            08
          </Paper>
          <Paper
            elevation={9}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            09
          </Paper>
          <Paper
            elevation={10}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            10
          </Paper>
          <Paper
            elevation={11}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            11
          </Paper>
          <Paper
            elevation={12}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            12
          </Paper>
          <Paper
            elevation={13}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            13
          </Paper>
          <Paper
            elevation={14}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            14
          </Paper>
          <Paper
            elevation={15}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            15
          </Paper>
          <Paper
            elevation={16}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            16
          </Paper>
          <Paper
            elevation={17}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            17
          </Paper>
          <Paper
            elevation={18}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            18
          </Paper>
          <Paper
            elevation={19}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            19
          </Paper>
          <Paper
            elevation={20}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            20
          </Paper>
          <Paper
            elevation={21}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            21
          </Paper>
          <Paper
            elevation={22}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            22
          </Paper>
          <Paper
            elevation={23}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            23
          </Paper>
          <Paper
            elevation={24}
            sx={{
              width: '64px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            24
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}
