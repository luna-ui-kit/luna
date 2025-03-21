'use client'
import { styled } from '@mui/material/styles'
import { Dialog as MuiDialog, DialogProps } from '@mui/material'

export const Dialog = styled(MuiDialog)<DialogProps>(({ theme }) => ({
  '.MuiDialog-paper': {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    padding: '24px',
    borderRadius: '24px',
    margin: '24px',
    maxWidth: '440px',
    width: '100%'
  }
}))
