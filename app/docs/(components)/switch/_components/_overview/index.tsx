'use client'
import { Switch } from '@/luna/components'
import {
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  useTheme
} from '@mui/material'

export const Overview = () => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      gap='24px'
      padding='24px'
      sx={{ background: theme.palette.background.paper }}
    >
      <Box display='flex' flexDirection='column' gap='4px'>
        <Typography variant='titleMedium'>Switch</Typography>
      </Box>

      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label='Label' />
        <FormControlLabel required control={<Switch />} label='Required' />
        <FormControlLabel disabled control={<Switch />} label='Disabled' />
      </FormGroup>
    </Box>
  )
}
