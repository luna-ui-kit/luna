'use client'
import { styled } from '@mui/material/styles'
import { Snackbar as MuiSnackbar, SnackbarProps } from '@mui/material'
import { Shadows } from '@/luna/theme/shadows'

export const Snackbar = styled(MuiSnackbar)<SnackbarProps>(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.grey[900],
    boxShadow: Shadows.shadows[15],
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: '16px'
  }
}))
