import { BlockWrapper } from '@/luna/components'
import { BlogPosts } from '../__data/types'
import { Box } from '@mui/material'
import { Card } from './_card'

export const BlogCards004 = ({ data }: { data: BlogPosts }) => {
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
          <Card key={_} post={post} />
        ))}
      </Box>
    </BlockWrapper>
  )
}
