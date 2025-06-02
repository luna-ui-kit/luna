'use client'
import {
  BlogCards001,
  BlogCards002,
  BlogCards003,
  BlogCards004,
  BlogCards005,
  BlogCards006
} from '@/luna/blocks'
import { Box, Typography, useTheme } from '@mui/material'
import { ThreeBlogPostsData, TwoBlogPostsData } from '../_data'

export const Overview = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        paddingY='24px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Box display='flex' flexDirection='column' gap='4px' paddingX='24px'>
          <Typography variant='titleMedium'>[Blog Cards] [001]</Typography>
        </Box>

        <BlogCards001 BlogPostsData={TwoBlogPostsData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        paddingY='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px' paddingX='24px'>
          <Typography variant='titleMedium'>[Blog Cards] [002]</Typography>
        </Box>

        <BlogCards002 BlogPostsData={ThreeBlogPostsData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        paddingY='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px' paddingX='24px'>
          <Typography variant='titleMedium'>[Blog Cards] [003]</Typography>
        </Box>

        <BlogCards003 BlogPostsData={ThreeBlogPostsData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        paddingY='24px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Box display='flex' flexDirection='column' gap='4px' paddingX='24px'>
          <Typography variant='titleMedium'>[Blog Cards] [004]</Typography>
        </Box>

        <BlogCards004 BlogPostsData={ThreeBlogPostsData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        paddingY='24px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Box display='flex' flexDirection='column' gap='4px' paddingX='24px'>
          <Typography variant='titleMedium'>[Blog Cards] [005]</Typography>
        </Box>

        <BlogCards005 BlogPostsData={ThreeBlogPostsData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        paddingY='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px' paddingX='24px'>
          <Typography variant='titleMedium'>[Blog Cards] [006]</Typography>
        </Box>

        <BlogCards006 BlogPostsData={ThreeBlogPostsData} />
      </Box>
    </>
  )
}
