'use client'
import { styled } from '@mui/material/styles'
import { Tab } from '@mui/material'

interface StyledTabProps {
  label: string
}

export const IosTab = styled((props: StyledTabProps) => <Tab {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minHeight: '40px',
    width: '100%',
    minWidth: 'fit-content',
    fontWeight: 500,
    padding: '8px 12px',
    color: theme.palette.grey[800],

    '&:hover': {
      color: theme.palette.grey[900],
      backgroundColor: theme.palette.grey[100]
    },
    '&.Mui-selected': {
      color: theme.palette.grey[900],
      backgroundColor: theme.palette.background.paper,
      borderRadius: '8px',
      fontWeight: 600
    },
    '&.Mui-focusVisible': {
      backgroundColor: theme.palette.grey[100]
    }
  })
)
