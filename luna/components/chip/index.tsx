'use client'
import { styled } from '@mui/material/styles'
import { Chip as MuiCheckbox, ChipProps } from '@mui/material'

export const Chip = styled(MuiCheckbox)<ChipProps>(({ theme }) => ({
  height: 32,
  width: 'max-content',
  borderRadius: 20,
  fontSize: '14px',
  fontWeight: '500',

  variants: [
    {
      props: { variant: 'filled' },
      style: {
        border: `1px solid ${theme.palette.grey[200]}`,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.default
      }
    },
    {
      props: { variant: 'outlined' },
      style: {
        border: `1px solid ${theme.palette.grey[200]}`,
        backgroundColor: theme.palette.background.paper
      }
    },
    {
      props: { variant: 'filled', color: 'primary' },
      style: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main
      }
    },
    {
      props: { variant: 'filled', color: 'secondary' },
      style: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.secondary.main
      }
    },
    {
      props: { variant: 'outlined', color: 'primary' },
      style: {
        borderColor: theme.palette.primary.main
      }
    },
    {
      props: { variant: 'outlined', color: 'secondary' },
      style: {
        borderColor: theme.palette.secondary.main
      }
    }
  ]
}))
