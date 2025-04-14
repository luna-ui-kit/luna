import { Metadata } from 'next'
import { BlockWrapper, Button } from '@/luna/components'
import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import {
  IconBlocks,
  IconBrandFigma,
  IconBrandGithub
} from '@tabler/icons-react'
import Link from 'next/link'
import cover from '@/public/cover.webp'

export const metadata: Metadata = {
  title: 'Luna UI Kit',
  description:
    "Luna is an open-source UI Kit built on MUI (Material Design 2). It's made to speed things up for both designers and devs. Super flexible, easy to customize, and always growing with new stuff.",
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
            gap: '4px',
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

          <Typography variant='headlineSmall' component='h1'>
            Welcome to Luna UI Kit
          </Typography>

          <Typography variant='bodySmall'>
            Luna is an open-source UI kit built on MUI (Material Design 2).
            It&apos;s made to speed things up for both designers and devs. Super
            flexible, easy to customize, and always growing with new stuff.
          </Typography>

          <Box
            sx={{ display: 'flex', gap: '16px', mt: '16px', flexWrap: 'wrap' }}
          >
            <Link href={'/docs'}>
              <Button
                variant='contained'
                size='large'
                startIcon={<IconBlocks color='white' />}
              >
                Docs
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
