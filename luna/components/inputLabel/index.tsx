'use client'
import {
  styled,
  InputLabel as MuiInputLabel,
  InputLabelProps
} from '@mui/material'
import { grey } from '@mui/material/colors'

export const InputLabel = styled(MuiInputLabel)<InputLabelProps>({
  color: grey[800],

  '&.Mui-focused': {
    color: grey[800]
  }
})
