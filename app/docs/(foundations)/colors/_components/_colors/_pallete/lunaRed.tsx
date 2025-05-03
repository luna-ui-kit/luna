import { Box, Typography, useTheme } from '@mui/material'
import { lunaRed } from '@/luna/theme/colors'
import { ColorItem } from '../../_colorItem'

const colors = [
  { label: '50', hex: lunaRed[50] },
  { label: '100', hex: lunaRed[100] },
  { label: '200', hex: lunaRed[200] },
  { label: '300', hex: lunaRed[300] },
  { label: '400', hex: lunaRed[400] },
  { label: '500', hex: lunaRed[500] },
  { label: '600', hex: lunaRed[600] },
  { label: '700', hex: lunaRed[700] },
  { label: '800', hex: lunaRed[800] },
  { label: '900', hex: lunaRed[900] }
]

export const ColorLunaRed = () => {
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
      <Typography variant='titleMedium'>lunaPurple</Typography>

      <Box display='flex' gap='16px' flexWrap='wrap'>
        {colors.map((color, _) => (
          <ColorItem key={_} label={color.label} hex={color.hex} />
        ))}
      </Box>
    </Box>
  )
}
