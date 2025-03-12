'use client'
import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

export const GettingStarted = () => {
  const theme = useTheme()

  return (
    <Box
      id='GettingStarted'
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
        <Typography variant='titleSmall'>🚀 About Luna</Typography>

        <Typography variant='bodySmall'>
          This open-source UI Kit is built on MUI (Material Design 2), and
          it&apos;s here to make your life easier! Whether you&apos;re designing
          or coding, this kit gives you a solid, flexible foundation to create
          modern web apps without starting from scratch. It&apos;s all about
          keeping things consistent, scalable, and super customizable. Oh, and
          we&apos;re always adding more cool components, so keep an eye out for
          updates. There&apos;s more awesome stuff on the way.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>🔥 What&apos;s Inside?</Typography>

        <ul style={{ margin: '0', paddingInlineStart: '24px' }}>
          <li>
            <Typography variant='bodySmall'>
              A growing collection of components
            </Typography>
          </li>
          <li>
            <Typography variant='bodySmall'>
              Fully customizable with the MUI theme system
            </Typography>
          </li>
          <li>
            <Typography variant='bodySmall'>
              Optimized for designers in Figma & developers in Next.js
            </Typography>
          </li>
        </ul>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>🔄 Ongoing Updates</Typography>

        <Typography variant='bodySmall'>
          This UI Kit is a work in progress, and it&apos;s getting better all
          the time! We&apos;re constantly adding new components and making
          improvements, so keep an eye out for updates. Your feedback and ideas
          are always welcome to help shape the future of this kit.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>🤝 Get Involved</Typography>

        <Typography variant='bodySmall'>
          This project is all about community love! If you&apos;re excited to
          help improve or expand the kit, we&apos;d love to have you on board.
          Whether it&apos;s fixing bugs, adding components, or sharing ideas,
          your contributions make this kit even better.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>📬 Want to get involved?</Typography>

        <Typography variant='bodySmall'>
          Reach out, let&apos;s build something awesome together!
        </Typography>

        <Box
          sx={{ display: 'flex', gap: '16px', mt: '16px', flexWrap: 'wrap' }}
        >
          <Link
            target='_blank'
            href={
              'https://www.figma.com/community/file/1480151487044683226/luna-ui-kit'
            }
          >
            <Button variant='outlined'>Figma</Button>
          </Link>

          <Link target='_blank' href={'https://github.com/luna-ui-kit/luna'}>
            <Button variant='outlined'>Github</Button>
          </Link>

          <Link target='_blank' href={'https://t.me/SalehAkaJim'}>
            <Button variant='outlined'>Telegram</Button>
          </Link>

          <Link target='_blank' href={'mailto:saleh.j.akhgar@gmail.com'}>
            <Button variant='outlined'>Email</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
