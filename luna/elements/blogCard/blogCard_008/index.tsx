import { Button } from '@/luna/components'
import { BlogPost } from '@/luna/data'
import { Box, Typography, useTheme } from '@mui/material'
import { IconArrowRight } from '@tabler/icons-react'

export const BlogCard008 = ({ post }: { post: BlogPost }) => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      gap='16px'
      borderRadius='24px'
      padding='16px'
      border={`1px solid ${theme.palette.grey[900]}`}
      sx={{ background: theme.palette.background.paper }}
      boxSizing='border-box'
    >
      <Box display='flex' flexDirection='column' gap='8px'>
        <Typography variant='labelSmall' color='textDisabled'>
          {post.date}
        </Typography>

        <Typography variant='titleSmall' color='textPrimary'>
          {post.title}
        </Typography>

        <Typography variant='bodySmall' color='textSecondary'>
          {post.shortDescription}
        </Typography>
      </Box>

      <Button
        variant='secondary'
        endIcon={<IconArrowRight />}
        sx={{ mt: '8px', width: '100%' }}
      >
        Read More
      </Button>

      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='center'
        width='100%'
        gap='8px'
      >
        <Typography variant='labelSmall' color='textDisabled'>
          {post.author} | {post.comments}
        </Typography>
      </Box>
    </Box>
  )
}
