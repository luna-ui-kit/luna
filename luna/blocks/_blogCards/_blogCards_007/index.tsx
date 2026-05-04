import { BlockWrapper } from '@/luna/components'
import { BlogPosts } from '../__data/types'
import { Box } from '@mui/material'
import { Card } from './_card'

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
          <Card key={_} post={post} />
        ))}
      </Box>
    </BlockWrapper>
  )
}
