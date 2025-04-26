'use client'
import { styled } from '@mui/material/styles'
import { Tab } from '@mui/material'

interface StyledTabProps {
  label: string
}

export const MuiTab = styled((props: StyledTabProps) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    fontWeight: 500,
    padding: '8px 12px',
    color: theme.palette.grey[800],

    '&:hover': {
      color: theme.palette.grey[900],
      backgroundColor: theme.palette.grey[100]
    },
    '&.Mui-selected': {
      color: theme.palette.grey[900],
      fontWeight: 600
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.grey[100]
    }
  })
)
