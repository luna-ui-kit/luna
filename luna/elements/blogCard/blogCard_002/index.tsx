import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
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

export const BlogCard002 = ({ post }: Props) => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      alignItems='center'
      gap='16px'
      borderRadius='24px'
      padding='16px'
      sx={{ background: theme.palette.background.paper }}
    >
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
          variant='contained'
          endIcon={<IconArrowRight color='white' />}
          sx={{ mt: '8px', width: '100%' }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  )
}
