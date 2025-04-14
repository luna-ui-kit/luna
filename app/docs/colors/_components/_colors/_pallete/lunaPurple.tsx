import { Box, Typography, useTheme } from '@mui/material'
import { lunaPurple } from '@/luna/theme/colors'
import { ColorItem } from '../../_colorItem'

const colors = [
  { label: '50', hex: lunaPurple[50] },
  { label: '100', hex: lunaPurple[100] },
  { label: '200', hex: lunaPurple[200] },
  { label: '300', hex: lunaPurple[300] },
  { label: '400', hex: lunaPurple[400] },
  { label: '500', hex: lunaPurple[500] },
  { label: '600', hex: lunaPurple[600] },
  { label: '700', hex: lunaPurple[700] },
  { label: '800', hex: lunaPurple[800] },
  { label: '900', hex: lunaPurple[900] }
]

export const ColorLunaPurple = () => {
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
