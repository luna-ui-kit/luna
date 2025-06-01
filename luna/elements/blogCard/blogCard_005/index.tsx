import { Tag } from '@/luna/components'
import { Box, Typography } from '@mui/material'
import image from '@/public/assets/image-placeholder.jpg'
import Image from 'next/image'

type Props = {
  post: {
    date: string
    categories: string[]
    title: string
    shortDescription: string
  }
}

export const BlogCard005 = ({ post }: Props) => {
  return (
    <Box
      position='relative'
      display='flex'
      flexDirection='column'
      width='100%'
      padding='24px'
      gap='16px'
      borderRadius='24px'
      height='280px'
      boxSizing='border-box'
    >
      <Image
        src={image}
        alt=''
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          objectFit: 'cover',
          height: '100%',
          borderRadius: 'inherit',
          width: '100%',
          zIndex: 1
        }}
      />

      <Box
        position='absolute'
        top={0}
        left={0}
        width='100%'
        height='100%'
        zIndex={2}
        borderRadius='inherit'
        sx={{ background: 'rgba(0, 0, 0, 0.5)' }}
      />

      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100%'
        zIndex={3}
      >
        {post.categories.map((category, _) => (
          <Tag key={_} label={category} color='grey' sx={{ opacity: 0.7 }} />
        ))}

        <Box display='flex' flexDirection='column' gap='8px'>
          <Typography variant='labelSmall' color='white'>
            {post.date}
          </Typography>

          <Typography variant='titleSmall' color='white'>
            {post.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
