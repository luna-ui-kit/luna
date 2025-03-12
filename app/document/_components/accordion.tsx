'use client'
import { Box, Typography, useTheme } from '@mui/material'
import { Accordions } from '@/luna/components'
import AccordionCode from '../_code/accordionCode'

export const data = [
  {
    expanded: 'item1',
    title: 'Item 1',
    detail: 'detail...'
  },
  {
    expanded: 'item2',
    title: 'Item 2',
    detail: 'detail...'
  },
  {
    expanded: 'item3',
    title: 'Item 3',
    detail: 'detail...'
  }
]

export const AccordionSection = () => {
  const theme = useTheme()

  return (
    <Box
      id='Accordion'
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
        <Typography variant='titleSmall'>Accordion</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            mt: '16px'
          }}
        >
          <Accordions data={data} />
        </Box>

        <AccordionCode />
      </Box>
    </Box>
  )
}
