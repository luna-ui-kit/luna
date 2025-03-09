'use client'
import { styled } from '@mui/material/styles'
import { Switch as MuiSwitch, SwitchProps } from '@mui/material'
import { green, grey } from '@mui/material/colors'

export const Switch = styled((props: SwitchProps) => (
  <MuiSwitch
    focusVisibleClassName='.Mui-focusVisible'
    disableRipple
    {...props}
  />
))(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: green[500],
        opacity: 1,
        border: 0
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: green[500],
      border: '6px solid #fff'
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100]
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7
    }
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: grey[200],
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500
    })
  }
}))
