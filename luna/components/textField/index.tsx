'use client'
import {
  styled,
  TextField as TextFieldMui,
  TextFieldProps
} from '@mui/material'
import { grey } from '@mui/material/colors'

const CustomTextField = styled(TextFieldMui)<TextFieldProps>({
  '& label': {
    top: '-4px'
  },
  '& label.Mui-focused': {
    color: grey[800]
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      padding: '12.5px 14px'
    },
    '& fieldset': {
      borderColor: grey[400],
      borderRadius: 0
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2'
    },
    '&.Mui-focused fieldset': {
      borderColor: grey[900]
    }
  }
})

export function TextField(props: TextFieldProps) {
  return <CustomTextField variant='outlined' size='medium' {...props} />
}
