'use client'
import {
  Box,
  FormControlLabel,
  FormGroup,
  Typography,
  useTheme
} from '@mui/material'
import { Checkbox } from '@/luna/components'

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
        <Typography variant='titleMedium'>Checkbox</Typography>
      </Box>

      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label='Label' />
        <FormControlLabel required control={<Checkbox />} label='Required' />
        <FormControlLabel disabled control={<Checkbox />} label='Disabled' />
      </FormGroup>
    </Box>
  )
}
