import { BlockWrapper } from '@/luna/components'
import { BlogPosts } from '@/luna/data'
import { BlogCard009 } from '@/luna/elements'
import { Box } from '@mui/material'

export const BlogCards009 = ({ data }: { data: BlogPosts }) => {
  return (
    <BlockWrapper>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='baseline'
        justifyContent='center'
        gap={{ xs: '24px', md: '32px', lg: '40px' }}
      >
        {data.map((post, _) => (
          <BlogCard009 key={_} post={post} />
        ))}
      </Box>
    </BlockWrapper>
  )
}
