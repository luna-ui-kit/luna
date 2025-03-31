'use client'
import { Rating as MuiRating, styled, RatingProps } from '@mui/material'
import { grey, yellow } from '@mui/material/colors'
import { IconStar, IconStarFilled } from '@tabler/icons-react'

const StyledRating = styled(MuiRating)({
  '& .MuiRating-iconEmpty svg': {
    color: grey[400]
  },
  '& .MuiRating-iconFilled svg': {
    color: yellow[700]
  },
  '& .MuiRating-iconHover svg': {
    color: yellow[600]
  }
})

export const Rating = (props: RatingProps) => {
  return (
    <StyledRating
      {...props}
      icon={<IconStarFilled />}
      emptyIcon={<IconStar />}
    />
  )
}
