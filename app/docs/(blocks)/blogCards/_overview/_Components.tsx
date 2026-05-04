import {
  BlogCards001,
  BlogCards002,
  BlogCards003,
  BlogCards004,
  BlogCards005,
  BlogCards006,
  BlogCards007,
  BlogCards008,
  BlogCards009,
  BlogCards010
} from '@/luna/blocks'
import {
  ThreeBlogPostsData,
  TwoBlogPostsData
} from '@/luna/blocks/_blogCards/__data'

export const Components = [
  {
    name: '[Blog Cards] [001]',
    component: <BlogCards001 data={TwoBlogPostsData} />
  },
  {
    name: '[Blog Cards] [002]',
    component: <BlogCards002 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [003]',
    component: <BlogCards003 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [004]',
    component: <BlogCards004 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [005]',
    component: <BlogCards005 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [006]',
    component: <BlogCards006 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [007]',
    component: <BlogCards007 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [008]',
    component: <BlogCards008 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [009]',
    component: <BlogCards009 data={ThreeBlogPostsData} />
  },
  {
    name: '[Blog Cards] [010]',
    component: <BlogCards010 data={TwoBlogPostsData} />
  }
]
