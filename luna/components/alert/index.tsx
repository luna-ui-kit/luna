'use client'
import { styled } from '@mui/material/styles'
import { Alert as MuiAlert, AlertProps } from '@mui/material'
import { blue, green, orange } from '@mui/material/colors'
import { lunaRed } from '@/luna/theme/colors'

export const Alert = styled(MuiAlert)<AlertProps>(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  padding: '2px 12px',
  width: '100%',
  boxSizing: 'border-box',

  '.MuiAlert-action': { minWidth: 'fit-content' },

  '.MuiAlert-message': {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    width: '100%'
  },

  ' .MuiAlert-icon': { alignSelf: 'center' },
  ' .MuiAlert-action': {
    alignSelf: 'center',
    padding: '0 0 0 8px',
    margin: 0
  },

  '::before': {
    display: 'block',
    borderRadius: '0 2px 2px 0',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(0,-50%)',
    width: '2px',
    height: '32px',
    content: '""'
  },

  variants: [
    {
      props: { severity: 'success' },
      style: {
        color: green[500],
        '::before': { backgroundColor: green[500] },
        ' .MuiAlert-icon svg': { stroke: green[500] }
      }
    },
    {
      props: { severity: 'info' },
      style: {
        color: blue[500],
        '::before': { backgroundColor: blue[500] },
        ' .MuiAlert-icon svg': { stroke: blue[500] }
      }
    },
    {
      props: { severity: 'warning' },
      style: {
        color: orange[600],
        '::before': { backgroundColor: orange[600] },
        ' .MuiAlert-icon svg': { stroke: orange[600] }
      }
    },
    {
      props: { severity: 'error' },
      style: {
        color: lunaRed[500],
        '::before': { backgroundColor: lunaRed[500] },
        ' .MuiAlert-icon svg': { stroke: lunaRed[500] }
      }
    }
  ]
}))
