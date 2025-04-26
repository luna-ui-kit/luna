'use client'
import { styled } from '@mui/material/styles'
import { Tabs as MuiTabs } from '@mui/material'

export const IosTabsGroup = styled(MuiTabs)(({ theme }) => ({
  width: '100%',
  minHeight: '40px',
  borderBottom: 'none',
  backgroundColor: theme.palette.grey[100],
  borderRadius: '12px',
  padding: '4px',

  '& .MuiTabs-indicator': {
    display: 'none'
  }
}))
