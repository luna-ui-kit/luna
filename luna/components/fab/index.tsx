'use client'
import { Fab as MuiFab, FabProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Fab = styled(MuiFab)<FabProps>(({ theme }) => ({
  width: '48px',
  height: '48px',
  minHeight: '48px',
  '& svg': {
    color: theme.palette.common.white
  },

  variants: [
    {
      props: { color: 'secondary' },
      style: {
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.grey[200]}`,
        '&:hover': { backgroundColor: theme.palette.grey[50] },
        '& svg': {
          color: theme.palette.grey[700]
        }
      }
    },

    {
      props: { size: 'small' },
      style: {
        width: '32px',
        height: '32px',
        minHeight: '32px',
        '& svg': {
          width: '16px',
          height: '16px'
        }
      }
    },
    {
      props: { size: 'medium' },
      style: {
        width: '44px',
        height: '44px',
        minHeight: '44px',
        '& svg': {
          width: '20px',
          height: '20px'
        }
      }
    }
  ]
}))
