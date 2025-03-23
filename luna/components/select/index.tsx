'use client'
import { Shadows } from '@/luna/theme/shadows'
import { styled, Select as MuiSelect, SelectProps } from '@mui/material'
import { grey } from '@mui/material/colors'

const CustomSelect = styled(MuiSelect)<SelectProps>({
  '&.MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: grey[400],
      borderRadius: '12px',

      '& legend': {
        visibility: 'unset',
        backgroundColor: '#fff'
      }
    },
    '&:hover fieldset': {
      borderColor: grey[600]
    },
    '&.Mui-focused fieldset': {
      borderColor: grey[900]
    }
  }
})

const CustomMenuProps = {
  sx: {
    '& .MuiPaper-root': {
      borderRadius: '12px',
      mt: '4px',
      boxShadow: Shadows.shadows[10]
    },
    '& .MuiList-root': {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      padding: '4px'
    },
    '& .MuiButtonBase-root': {
      borderRadius: '8px',
      '&:hover': { background: grey[50] },
      '&:focus': { background: grey[100] }
    },
    '& .MuiMenuItem-root.Mui-selected': {
      background: grey[50],
      '&:after': {
        position: 'absolute',
        right: '8px',
        top: 0,
        transform: 'translate(0, 50%)',
        display: 'block',
        width: '16px',
        height: '16px',
        background: `url('data:image/svg+xml,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.33331 8L6.66665 11.3333L13.3333 4.66667" stroke="%234CAF50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>')`,
        content: '""'
      }
    }
  }
}

export function Select(props: SelectProps) {
  return (
    <CustomSelect
      variant='outlined'
      {...props}
      MenuProps={{ ...CustomMenuProps }}
    />
  )
}
