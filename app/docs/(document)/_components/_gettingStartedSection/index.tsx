'use client'
import { Button } from '@/luna/components'
import { Avatar, Box, Typography, useTheme } from '@mui/material'
import { IconBrandFigma, IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'

export const GettingStartedSection = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        display='flex'
        gap='8px'
        justifyContent='space-between'
        alignItems='center'
        flexWrap='wrap'
        borderRadius='24px'
        padding='16px'
        sx={{ background: theme.palette.secondary.main }}
      >
        <Typography color='white' variant='titleMedium'>
          ⚡ Download
        </Typography>

        <Box display='flex' gap='12px' flexWrap='wrap'>
          <Link
            target='_blank'
            href={
              'https://www.figma.com/community/file/1480151487044683226/luna-ui-kit'
            }
          >
            <Button variant='secondary' startIcon={<IconBrandFigma />}>
              Figma
            </Button>
          </Link>

          <Link target='_blank' href={'https://github.com/luna-ui-kit/luna'}>
            <Button startIcon={<IconBrandGithub />} variant='secondary'>
              Github
            </Button>
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
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>🚀 About Luna</Typography>

          <Typography variant='bodyMedium'>
            Luna is an open-source UI kit built on MUI (Material Design 2).
            It&apos;s made to speed things up for both designers and devs. Super
            flexible, easy to customize, and always growing with new stuff.
          </Typography>
        </Box>

        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>🔥 What&apos;s Inside?</Typography>

          <ul style={{ margin: '0', paddingInlineStart: '24px' }}>
            <li>
              <Typography variant='bodyMedium'>
                A growing collection of components
              </Typography>
            </li>
            <li>
              <Typography variant='bodyMedium'>
                Fully customizable with the MUI theme system
              </Typography>
            </li>
            <li>
              <Typography variant='bodyMedium'>
                Optimized for designers in Figma & developers in Next.js
              </Typography>
            </li>
          </ul>
        </Box>

        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>🔄 Ongoing Updates</Typography>

          <Typography variant='bodyMedium'>
            We’re adding new components and polishing things all the time.
            Updates drop regularly, so keep an eye out
          </Typography>
        </Box>

        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>🤝 Get Involved</Typography>

          <Typography variant='bodyMedium'>
            Got ideas? Want to help out? Whether it&apos;s bug fixes, new
            components, or sharing ideas, your contributions make this kit even
            better.
          </Typography>
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
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>👋 Say Hi</Typography>

          <Typography variant='bodyMedium'>
            Got something in mind? Hit me up and let&apos;s talk.
          </Typography>
        </Box>

        <Box
          display='flex'
          gap='8px'
          justifyContent='space-between'
          alignItems='center'
          flexWrap='wrap'
          border={`1px solid ${theme.palette.grey[200]}`}
          borderRadius='16px'
          padding='8px 16px 8px 8px'
        >
          <Box display='flex' gap='8px' alignItems='center'>
            <Avatar
              variant='rounded'
              sx={{
                border: `1px solid ${theme.palette.grey[200]}`,
                borderRadius: '8px',
                width: 48,
                height: 48
              }}
              src='/me/profile.png'
            />

            <Typography>Saleh (Jim)</Typography>
          </Box>

          <Box display='flex' gap='8px'>
            <Link
              target='_blank'
              href={'https://www.linkedin.com/in/saleh-akhgar/'}
            >
              <Button variant='link'>LinkedIn</Button>
            </Link>

            <Link target='_blank' href={'https://t.me/SalehAkaJim'}>
              <Button variant='link'>Telegram</Button>
            </Link>

            <Link target='_blank' href={'mailto:saleh.j.akhgar@gmail.com'}>
              <Button variant='link'>Email</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}
