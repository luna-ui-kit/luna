import { BlockWrapper } from '@/luna/components'
import { BlogPosts } from '@/luna/data'
import { BlogCard007 } from '@/luna/elements'
import { Box } from '@mui/material'

export const BlogCards007 = ({ data }: { data: BlogPosts }) => {
  return (
    <BlockWrapper>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='baseline'
        justifyContent='center'
        gap='0px'
      >
        {data.map((post, _) => (
          <BlogCard007 key={_} post={post} />
        ))}
      </Box>
    </BlockWrapper>
  )
}
