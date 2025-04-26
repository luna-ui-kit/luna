'use client'
import { styled } from '@mui/material/styles'
import { Tabs as MuiTabs } from '@mui/material'

export const MuiTabsGroup = styled(MuiTabs)(({ theme }) => ({
  width: '100%',
  borderBottom: `1px solid ${theme.palette.grey[200]}`,

  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main
  }
}))
