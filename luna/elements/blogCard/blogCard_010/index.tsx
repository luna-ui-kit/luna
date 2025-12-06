import { Button } from '@/luna/components'
import { Box, Typography, useTheme } from '@mui/material'
import image from '@/public/assets/image-placeholder.jpg'
import Image from 'next/image'
import { IconArrowRight } from '@tabler/icons-react'
import { BlogPost } from '@/luna/data'

export const BlogCard010 = ({ post }: { post: BlogPost }) => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
      alignItems='start'
      gap='16px'
      boxSizing='border-box'
      borderRadius='24px'
      padding='16px'
      sx={{ background: theme.palette.background.paper }}
    >
      <Image
        src={image}
        alt=''
        width={180}
        height={160}
        style={{ objectFit: 'cover', borderRadius: '12px' }}
      />

      <Box display='flex' flexDirection='column' gap='8px'>
        <Typography variant='labelSmall' color='textDisabled'>
          {post.date} | {post.categories.join(', ')}
        </Typography>

        <Typography variant='titleSmall' color='textPrimary'>
          {post.title}
        </Typography>

        <Typography
          variant='bodySmall'
          color='textSecondary'
          sx={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
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
