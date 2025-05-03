import { Box, Typography, useTheme } from '@mui/material'
import { lunaPurple, lunaRed } from '@/luna/theme/colors'
import { grey } from '@mui/material/colors'
import { ColorItem } from '../../_colorItem'

const colors = [
  {
    name: 'palette',
    colors: [
      { label: 'primary', hex: lunaPurple[500] },
      { label: 'secondary', hex: lunaRed[500] }
    ]
  },
  {
    name: 'background',
    colors: [
      { label: 'default', hex: grey[50] },
      { label: 'paper', hex: 'white' }
    ]
  },
  {
    name: 'text',
    colors: [
      { label: 'primary', hex: grey[900] },
      { label: 'secondary', hex: grey[800] },
      { label: 'disabled', hex: grey[500] }
    ]
  },
  {
    name: 'other',
    colors: [
      { label: 'border', hex: grey[200] },
      { label: 'icon', hex: grey[700] }
    ]
  }
]

export const ColorThemeMain = () => {
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
      <Typography variant='titleMedium'>Theme: Main</Typography>

      <Box display='flex' gap='24px' flexDirection='column'>
        {colors.map((item, _i) => (
          <Box key={_i} display='flex' flexDirection='column' gap='12px'>
            <Typography variant='titleMedium'>{item.name}</Typography>

            <Box display='flex' gap='16px' flexWrap='wrap'>
              {item.colors.map((color, _) => (
                <ColorItem key={_} label={color.label} hex={color.hex} />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
