'use client'
import { styled } from '@mui/material/styles'
import { Radio as MuiRadio, RadioProps } from '@mui/material'

const BpIcon = styled('span')<RadioProps>({
  width: 24,
  height: 24,
  backgroundImage: `url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="10" stroke="%23EEEEEE" stroke-width="1.5"/></svg>')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
})

const BpCheckedIcon = styled(BpIcon)({
  '&::before': {
    display: 'block',
    width: 24,
    height: 24,
    backgroundImage: `url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="10" stroke="%234CAF50" stroke-width="1.5"/><rect x="7" y="7" width="10" height="10" rx="5" fill="%234CAF50" stroke="%234CAF50" stroke-width="1.5"/></svg>')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    content: '""'
  }
})

export function Radio(props: RadioProps) {
  return (
    <MuiRadio
      sx={{ '&:hover': { bgcolor: 'transparent' } }}
      color='default'
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  )
}
