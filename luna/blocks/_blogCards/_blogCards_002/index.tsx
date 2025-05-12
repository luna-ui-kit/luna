import { BlockWrapper } from '@/luna/components'
import { BlogCard002 } from '@/luna/elements'
import { Box } from '@mui/material'

type Post = {
  date: string
  categories: string[]
  title: string
  shortDescription: string
}

type Props = {
  BlogPostsData: Post[]
}

export const BlogCards002 = ({ BlogPostsData }: Props) => {
  return (
    <BlockWrapper>
      <Box
        display='flex'
        flexDirection={{ xs: 'column', lg: 'row' }}
        alignItems='baseline'
        justifyContent='center'
        gap={{ xs: '24px', md: '32px', lg: '40px' }}
      >
        {BlogPostsData.map((post, _) => (
          <BlogCard002 key={_} post={post} />
        ))}
      </Box>
    </BlockWrapper>
  )
}
