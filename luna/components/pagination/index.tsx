'use client'
import { styled } from '@mui/material/styles'
import {
  Pagination as MuiPagination,
  PaginationItem,
  PaginationProps
} from '@mui/material'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

export const PaginationCustom = styled(MuiPagination)<PaginationProps>(
  ({ theme }) => ({
    '& ul li .MuiButtonBase-root': {
      minHeight: '44px',
      minWidth: '44px',
      borderRadius: '12px'
    },

    '& ul li .Mui-selected': {
      background: theme.palette.background.paper,
      border: `1px solid ${theme.palette.grey[200]}`
    }
  })
)

export function Pagination(props: PaginationProps) {
  return (
    <PaginationCustom
      {...props}
      renderItem={item => (
        <PaginationItem
          slots={{ previous: IconChevronLeft, next: IconChevronRight }}
          {...item}
        />
      )}
    />
  )
}
