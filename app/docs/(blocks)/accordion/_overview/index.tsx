'use client'
import { Box, Typography, useTheme } from '@mui/material'
import {
  Accordion001,
  Accordion002,
  Accordion003,
  Accordion004,
  Accordion005,
  Accordion006,
  Accordion007
} from '@/luna/blocks'
import { AccordionData } from '../_data'

export const Overview = () => {
  const theme = useTheme()

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>[Accordion] [001]</Typography>
        </Box>

        <Accordion001 data={AccordionData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.background.paper }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>[Accordion] [002]</Typography>
        </Box>

        <Accordion002 data={AccordionData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>[Accordion] [003]</Typography>
        </Box>

        <Accordion003 data={AccordionData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>[Accordion] [004]</Typography>
        </Box>

        <Accordion004 data={AccordionData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>[Accordion] [005]</Typography>
        </Box>

        <Accordion005 data={AccordionData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>[Accordion] [006]</Typography>
        </Box>

        <Accordion006 data={AccordionData} />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        borderRadius='24px'
        gap='24px'
        padding='24px'
        sx={{ background: theme.palette.grey[100] }}
      >
        <Box display='flex' flexDirection='column' gap='4px'>
          <Typography variant='titleMedium'>[Accordion] [007]</Typography>
        </Box>

        <Accordion007 data={AccordionData} />
      </Box>
    </>
  )
}
