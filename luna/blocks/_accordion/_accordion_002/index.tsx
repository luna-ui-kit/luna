'use client'
import { useState } from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { Box } from '@mui/material'

interface data {
  expanded: string
  title: string
  detail: string
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&::before': {
    display: 'none'
  }
}))

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        '.Mui-expanded & > .collapsIconWrapper': { display: 'none' },
        '.collapsIconWrapper': { display: 'flex' },
        '.expandIconWrapper': { display: 'none' },
        '.Mui-expanded & > .expandIconWrapper': { display: 'flex' }
      }}
    >
      <IconMinus className='expandIconWrapper' />
      <IconPlus className='collapsIconWrapper' />
    </Box>
  )
}

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<CustomExpandIcon />} {...props} />
))(({ theme }) => ({
  fontFamily: 'inherit',
  backgroundColor: theme.palette.background.paper,
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'none'
    }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  borderTop: 'none'
}))

export function Accordion002({ data }: { data: data[] }) {
  const [expanded, setExpanded] = useState<string | false>('panel1')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div>
      {data.map((item, _) => (
        <Accordion
          key={_}
          expanded={expanded === item.expanded}
          onChange={handleChange(item.expanded)}
        >
          <AccordionSummary>
            <Typography variant='titleSmall'>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='bodySmall'>{item.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
