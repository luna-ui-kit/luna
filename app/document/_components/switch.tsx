'use client'
import {
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  useTheme
} from '@mui/material'
import { Switch } from '@/luna/components'
import SwitchCode from '../_code/switchCode'

export const SwitchSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Switch'
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
        <Typography variant='titleSmall'>Switch</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label='Label'
            />
            <FormControlLabel required control={<Switch />} label='Required' />
            <FormControlLabel disabled control={<Switch />} label='Disabled' />
          </FormGroup>
        </Box>

        <SwitchCode />
      </Box>
    </Box>
  )
}
