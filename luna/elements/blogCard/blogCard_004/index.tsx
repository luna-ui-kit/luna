import { Box, Typography } from '@mui/material'
import image from '@/public/assets/image-placeholder.jpg'
import Image from 'next/image'

type Props = {
  post: {
    date: string
    author: string
    categories: string[]
    title: string
    shortDescription: string
  }
}

export const BlogCard004 = ({ post }: Props) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      width='100%'
      alignItems='center'
      gap='16px'
      borderRadius='24px'
      padding='16px'
      boxSizing='border-box'
    >
      <Image
        src={image}
        alt=''
        style={{
          objectFit: 'cover',
          borderRadius: '12px',
          height: '80px',
          width: '80px'
        }}
      />

      <Box display='flex' flexDirection='column' gap='8px'>
        <Typography variant='labelSmall' color='textDisabled'>
          {post.date} | By {post.author}
        </Typography>

        <Typography variant='titleSmall' color='textPrimary'>
          {post.title}
        </Typography>
      </Box>
    </Box>
  )
}
