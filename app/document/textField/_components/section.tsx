'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { TextField } from '@/luna/components'
import TextFieldCode from './code'

export const TextFieldSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='TextField'
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
        <Typography variant='titleSmall'>Text Field</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            mt: '12px'
          }}
        >
          <TextField
            variant='outlined'
            label='Outlined'
            helperText='Helper text'
          />

          <TextField
            variant='outlined'
            label='Textarea'
            multiline
            minRows={4}
          />
        </Box>

        <TextFieldCode />
      </Box>
    </Box>
  )
}
