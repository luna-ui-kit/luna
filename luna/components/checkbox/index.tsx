'use client'
import { styled } from '@mui/material/styles'
import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material'
import { green } from '@mui/material/colors'

const BpIcon = styled('span')<CheckboxProps>(({ theme }) => ({
  borderRadius: 0,
  width: 20,
  height: 20,
  backgroundColor: theme.palette.background.paper,
  border: `1.5px solid ${theme.palette.grey[200]}`
}))

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: green[500],
  border: `1.5px solid ${green[500]}`,
  borderRadius: 0,
  width: 20,
  height: 20,

  '&::before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: `url(
      'data:image/svg+xml,<svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33333 5L4.66666 8.33333L11.3333 1.66666" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    )`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    content: '""'
  }
})

export function Checkbox(props: CheckboxProps) {
  return (
    <MuiCheckbox
      sx={{ '&:hover': { bgcolor: 'transparent' } }}
      color='default'
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  )
}
