'use client'
import {
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  useTheme
} from '@mui/material'
import CheckboxCode from './checkboxCode'
import { Checkbox } from '@/luna/components'

export const CheckboxSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Checkbox'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        gap: '24px',
        padding: '24px',
        border: `1px solid ${theme.palette.grey[300]}`,
        background: theme.palette.background.paper
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <Typography variant='titleSmall'>Checkbox</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='Label'
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label='Required'
            />
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label='Disabled'
            />
          </FormGroup>
        </Box>

        <CheckboxCode />
      </Box>
    </Box>
  )
}
