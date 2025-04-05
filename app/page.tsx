import { Metadata } from 'next'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { IconBrandFigma, IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'
import cover from '@/public/cover.webp'

export const metadata: Metadata = {
  title: 'Luna UI Kit',
  description:
    "This open-source UI Kit is built on MUI (Material Design 2), and it’s here to make your life easier! Whether you're designing or coding, this kit gives you a solid, flexible foundation to create modern web apps without starting from scratch.",
  alternates: {
    canonical: 'https://luna-ui-kit.com'
  }
}

export default function Page() {
  return (
    <BlockWrapper>
      <Box
        sx={{
          paddingY: '24px',
          maxWidth: '640px',
          m: 'auto'
        }}
      >
        <Paper
          elevation={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            padding: '24px',
            borderRadius: '24px'
          }}
        >
          <Image
            src={cover}
            alt=''
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              marginBottom: '24px',
              borderRadius: '12px'
            }}
          />

          <Typography variant='displaySmall'>Welcome to Luna UI Kit</Typography>

          <Typography variant='bodySmall'>
            This open-source UI Kit is built on MUI (Material Design 2), and
            it&apos;s here to make your life easier! Whether you&apos;re
            designing or coding, this kit gives you a solid, flexible foundation
            to create modern web apps without starting from scratch. It&apos;s
            all about keeping things consistent, scalable, and super
            customizable. Oh, and we&apos;re always adding more cool components,
            so keep an eye out for updates. There&apos;s more awesome stuff on
            the way.
          </Typography>

          <Box
            sx={{ display: 'flex', gap: '16px', mt: '16px', flexWrap: 'wrap' }}
          >
            <Link href={'/document'}>
              <Button variant='contained' size='large'>
                Document
              </Button>
            </Link>

            <Button
              component={'a'}
              href='https://www.figma.com/community/file/1480151487044683226/luna-ui-kit'
              variant='outlined'
              size='large'
              startIcon={<IconBrandFigma />}
            >
              Figma
            </Button>

            <Button
              component={'a'}
              href='https://github.com/luna-ui-kit/luna'
              variant='outlined'
              size='large'
              startIcon={<IconBrandGithub />}
            >
              Github
            </Button>
          </Box>
        </Paper>
      </Box>
    </BlockWrapper>
  )
}
