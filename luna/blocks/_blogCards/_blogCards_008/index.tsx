import { BlockWrapper } from '@/luna/components'
import { BlogPosts } from '@/luna/data'
import { BlogCard008 } from '@/luna/elements'
import { Box } from '@mui/material'

export const BlogCards008 = ({ data }: { data: BlogPosts }) => {
  return (
    <BlockWrapper>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', lg: 'row' }}
        alignItems='baseline'
        justifyContent='center'
        gap={{ xs: '24px', md: '32px', lg: '40px' }}
      >
        {data.map((post, _) => (
          <BlogCard008 key={_} post={post} />
        ))}
      </Box>
    </BlockWrapper>
  )
}
