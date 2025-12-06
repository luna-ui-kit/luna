import { Box, Typography, useTheme } from '@mui/material'
import image from '@/public/assets/image-placeholder.jpg'
import Image from 'next/image'
import { BlogPost } from '@/luna/data'

export const BlogCard009 = ({ post }: { post: BlogPost }) => {
  const theme = useTheme()

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
      alignItems='center'
      justifyContent='center'
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
        zIndex={3}
        gap='8px'
        padding='16px'
        width='100%'
        maxWidth='360px'
        textAlign='center'
        borderRadius='12px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Typography variant='titleSmall' color='textPrimary'>
          {post.title}
        </Typography>

        <Typography
          variant='labelSmall'
          color='textDisabled'
          sx={{ flexWrap: 'wrap' }}
        >
          {post.author} | {post.date} | {post.categories.join(', ')}
        </Typography>
      </Box>
    </Box>
  )
}
