'use client'
import { Button as MuiButton, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  width: 'fit-content',
  height: '44px',
  fontSize: '14px',
  textTransform: 'none',
  borderRadius: '12px',
  boxShadow: 'none',
  fontWeight: 500,
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
        color: theme.palette.grey[900]
      }
    },
    {
      props: { variant: 'link' },
      style: {
        color: theme.palette.grey[900],
        textDecoration: 'underline',
        padding: '0',
        minWidth: 'auto',
        height: 'fit-content',
        '&:hover': { textDecoration: 'underline' },
        '&:active': { textDecoration: 'underline' },
        '&:focus': { textDecoration: 'underline' }
      }
    },
    {
      props: { variant: 'secondary' },
      style: {
        color: theme.palette.grey[900],
        backgroundColor: theme.palette.grey[50],
        '&:hover': { backgroundColor: theme.palette.grey[100] }
      }
    },

    {
      props: { size: 'small' },
      style: {
        borderRadius: '8px',
        height: '32px',
        fontSize: '12px'
      }
    },
    {
      props: { size: 'large' },
      style: { height: '48px', fontSize: '12px' }
    }
  ]
}))
