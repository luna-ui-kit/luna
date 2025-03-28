'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { FirstDialog } from './firstDialog'
import FirstDialogCode from './firstDialogCode'
import { SecondDialog } from './secondDialog'
import SecondDialogCode from './secondDialogCode'
import { ThirdDialog } from './thirdDialog'
import ThirdDialogCode from './thirdDialogCode'

export const DialogSection = () => {
  const theme = useTheme()

  return (
    <Box
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
        <Typography variant='titleSmall'>Dialog</Typography>

        <Box
          sx={{ display: 'flex', gap: '16px', mt: '16px', flexWrap: 'wrap' }}
        >
          <FirstDialog />
          <SecondDialog />
          <ThirdDialog />
        </Box>

        <FirstDialogCode />
        <SecondDialogCode />
        <ThirdDialogCode />
      </Box>
    </Box>
  )
}
