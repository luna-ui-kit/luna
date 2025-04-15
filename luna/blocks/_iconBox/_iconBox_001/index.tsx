'use client'
import { BlockWrapper } from '@/luna/components'
import { Box, Grid, Typography, useTheme } from '@mui/material'
import { items } from './items'

export function IconBox001() {
  const theme = useTheme()

  return (
    <BlockWrapper>
      <Box sx={{ paddingY: { xs: '24px', md: '40px' } }}>
        <Grid
          spacing={'24px'}
          container
          sx={{
            padding: '24px',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '24px'
          }}
        >
          {items.map((item, _) => (
            <Grid
              size={{ xs: 12, sm: 6, lg: 3 }}
              key={_}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {item.icon}

              <Typography variant='titleMedium'>{item.title}</Typography>

              <Typography variant='bodySmall' color='textDisabled'>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </BlockWrapper>
  )
}
