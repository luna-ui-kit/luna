'use client'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  height: '44px',
  fontSize: '14px',
  textTransform: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  fontWeight: 400,
  '&:hover': { boxShadow: 'none' },
  '&:active': { boxShadow: 'none' },

  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        color: theme.palette.grey[900],
        borderColor: theme.palette.grey[200]
      }
    },
    {
      props: { variant: 'text' },
      style: {
        color: theme.palette.grey[900],
        borderColor: theme.palette.grey[200]
      }
    },

    {
      props: { size: 'small' },
      style: { height: '32px', fontSize: '12px' }
    },
    {
      props: { size: 'large' },
      style: { height: '48px', fontSize: '16px' }
    }
  ]
}))
