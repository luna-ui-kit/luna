import { BlockWrapper } from '@/luna/components'
import { BlogPosts } from '@/luna/data'
import { BlogCard010 } from '@/luna/elements'
import { Box } from '@mui/material'

export const BlogCards010 = ({ data }: { data: BlogPosts }) => {
  return (
    <BlockWrapper>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', lg: 'row' }}
        gap={{ xs: '24px', md: '32px', lg: '40px' }}
      >
        {data.map((post, _) => (
          <BlogCard010 key={_} post={post} />
        ))}
      </Box>
    </BlockWrapper>
  )
}
