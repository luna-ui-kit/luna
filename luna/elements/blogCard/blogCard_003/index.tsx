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

export const BlogCard003 = ({ post }: Props) => {
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
      boxSizing='border-box'
    >
      <Box position='relative' display='flex' width='100%'>
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
          position='absolute'
          display='flex'
          alignItems='center'
          width='max-content'
          padding='4px 8px'
          borderRadius='24px'
          bottom='16px'
          left='50%'
          sx={{
            background: theme.palette.grey[800],
            transform: 'translate(-50%, 0)'
          }}
        >
          <Typography variant='labelSmall' color='white'>
            {post.date} | {post.categories[0]}
          </Typography>
        </Box>
      </Box>

      <Box display='flex' flexDirection='column' gap='8px'>
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
