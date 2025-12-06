import { Chip } from '@/luna/components'
import { BlogPost } from '@/luna/data'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { IconArrowUpRight } from '@tabler/icons-react'

export const BlogCard007 = ({ post }: { post: BlogPost }) => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      gap='16px'
      borderRadius='0'
      padding='16px'
      borderBottom={`1px solid ${theme.palette.divider}`}
      sx={{ background: theme.palette.background.paper }}
      boxSizing='border-box'
    >
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography variant='labelSmall' color='textDisabled'>
          {post.date}
        </Typography>

        <IconButton sx={{ border: 'none', height: '16px' }}>
          {<IconArrowUpRight size={16} />}
        </IconButton>
      </Box>

      <Typography variant='titleSmall' color='textPrimary'>
        {post.title}
      </Typography>

      <Box display='flex' flexDirection='row' gap='8px'>
        {post.categories.map((category, _) => (
          <Chip
            key={_}
            label={category}
            variant='filled'
            size='small'
            sx={{ border: 'none' }}
          />
        ))}
      </Box>
    </Box>
  )
}
