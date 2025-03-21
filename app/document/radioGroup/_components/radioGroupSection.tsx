'use client'
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  useTheme
} from '@mui/material'
import { Radio } from '@/luna/components'
import RadioGroupCode from './radioCode'

export const RadioGroupSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='RadioGroup'
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
        <Typography variant='titleSmall'>Radio Group</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='radio-buttons-group'
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <RadioGroupCode />
      </Box>
    </Box>
  )
}
