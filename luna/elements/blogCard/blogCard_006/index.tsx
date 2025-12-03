import { Box, IconButton, Typography, useTheme } from '@mui/material'
import image from '@/public/assets/image-placeholder.jpg'
import Image from 'next/image'
import { IconArrowUpRight } from '@tabler/icons-react'

type Props = {
  post: {
    date: string
    author: string
    categories: string[]
    title: string
    shortDescription: string
  }
}

export const BlogCard006 = ({ post }: Props) => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      gap='16px'
      borderRadius='24px'
      padding='16px'
      sx={{ background: theme.palette.background.paper }}
      boxSizing='border-box'
    >
      <Box display='flex' flexDirection='column' gap='8px'>
        <Typography variant='labelSmall' color='textDisabled'>
          {post.date} | {post.categories.join(', ')}
        </Typography>

        <Typography variant='titleSmall' color='textPrimary'>
          {post.title}
        </Typography>
      </Box>

      <Image
        src={image}
        alt=''
        style={{
          objectFit: 'cover',
          borderRadius: '12px',
          height: '160px',
          width: '100%'
        }}
      />

      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
        width='100%'
        gap='8px'
      >
        <Typography variant='bodySmall' color='textSecondary'>
          {post.author}
        </Typography>

        <IconButton>{<IconArrowUpRight />}</IconButton>
      </Box>
    </Box>
  )
}
