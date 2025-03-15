'use client'
import { styled } from '@mui/material/styles'
import { Avatar as MuiAvatar, AvatarProps } from '@mui/material'

export const Avatar = styled(MuiAvatar)<AvatarProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[200]}`,
  color: theme.palette.text.primary,
  fontSize: '14px'
}))
