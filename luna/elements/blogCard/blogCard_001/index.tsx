import { Button } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import image from '@/public/assets/image-placeholder.jpg'
import Image from 'next/image'
import { IconArrowRight } from '@tabler/icons-react'

type Props = {
  post: {
    date: string
    categories: string[]
    title: string
    shortDescription: string
  }
}

export const BlogCard001 = ({ post }: Props) => {
  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems='center'
      gap='16px'
      boxSizing='border-box'
    >
      <Image
        src={image}
        alt=''
        width={240}
        height={240}
        style={{ objectFit: 'cover', borderRadius: '24px' }}
      />

      <Box display='flex' flexDirection='column' gap='8px'>
        <Typography variant='labelSmall' color='textDisabled'>
          {post.date} | {post.categories.join(', ')}
        </Typography>

        <Typography variant='titleSmall' color='textPrimary'>
          {post.title}
        </Typography>

        <Typography variant='bodySmall' color='textSecondary'>
          {post.shortDescription}
        </Typography>

        <Button
          variant='outlined'
          endIcon={<IconArrowRight />}
          sx={{ mt: '8px' }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  )
}
