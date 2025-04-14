import { Box, Typography, useTheme } from '@mui/material'

export const ColorItem = ({ hex, label }: { hex: string; label: string }) => {
  const theme = useTheme()

  return (
    <Box display='flex' flexDirection='column' gap='8px'>
      <Box
        border={`1px solid ${theme.palette.grey[100]}`}
        width='48px'
        height='48px'
        borderRadius='12px'
        sx={{ background: hex }}
      />

      <Box display='flex' flexDirection='column' gap='2px'>
        <Typography variant='titleSmall'>{label}</Typography>
        <Typography variant='bodyExtraSmall'>{hex}</Typography>
      </Box>
    </Box>
  )
}
