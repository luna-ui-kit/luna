'use client'
import { styled } from '@mui/material/styles'
import { Divider as MuiDivider, DividerProps } from '@mui/material'

export const Divider = styled(MuiDivider)<DividerProps>(({ theme }) => ({
  borderColor: theme.palette.grey[200]
}))
