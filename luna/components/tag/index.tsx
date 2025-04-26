'use client'
import { styled } from '@mui/material/styles'
import { Chip as MuiCheckbox, ChipProps } from '@mui/material'
import {
  blue,
  brown,
  green,
  lime,
  pink,
  teal,
  yellow
} from '@mui/material/colors'
import { lunaPurple, lunaRed } from '@/luna/theme/colors'

export const Tag = styled(MuiCheckbox)<ChipProps>(({ theme }) => ({
  height: 24,
  width: 'max-content',
  borderRadius: 20,
  fontSize: '12px',
  fontWeight: '500',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,

  '& span': {
    padding: '0px 8px'
  },

  variants: [
    {
      props: { color: 'grey' },
      style: {
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[800]
      }
    },
    {
      props: { variant: 'outlined', color: 'grey' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.grey[800],
        color: theme.palette.grey[800]
      }
    },
    {
      props: { color: 'green' },
      style: {
        backgroundColor: green[50],
        color: green[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'green' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: green[600],
        color: green[600]
      }
    },
    {
      props: { color: 'lunaRed' },
      style: {
        backgroundColor: lunaRed[50],
        color: lunaRed[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'lunaRed' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: lunaRed[600],
        color: lunaRed[600]
      }
    },
    {
      props: { color: 'yellow' },
      style: {
        backgroundColor: yellow[50],
        color: yellow[800]
      }
    },
    {
      props: { variant: 'outlined', color: 'yellow' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: yellow[800],
        color: yellow[800]
      }
    },
    {
      props: { color: 'blue' },
      style: {
        backgroundColor: blue[50],
        color: blue[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'blue' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: blue[600],
        color: blue[600]
      }
    },
    {
      props: { color: 'pink' },
      style: {
        backgroundColor: pink[50],
        color: pink[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'pink' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: pink[600],
        color: pink[600]
      }
    },
    {
      props: { color: 'lunaPurple' },
      style: {
        backgroundColor: lunaPurple[50],
        color: lunaPurple[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'lunaPurple' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: lunaPurple[600],
        color: lunaPurple[600]
      }
    },
    {
      props: { color: 'lime' },
      style: {
        backgroundColor: lime[50],
        color: lime[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'lime' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: lime[600],
        color: lime[600]
      }
    },
    {
      props: { color: 'teal' },
      style: {
        backgroundColor: teal[50],
        color: teal[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'teal' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: teal[600],
        color: teal[600]
      }
    },
    {
      props: { color: 'brown' },
      style: {
        backgroundColor: brown[50],
        color: brown[600]
      }
    },
    {
      props: { variant: 'outlined', color: 'brown' },
      style: {
        backgroundColor: theme.palette.background.paper,
        borderColor: brown[600],
        color: brown[600]
      }
    }
  ]
}))
