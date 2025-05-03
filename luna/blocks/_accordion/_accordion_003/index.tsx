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
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { Box } from '@mui/material'

interface data {
  expanded: string
  title: string
  detail: string
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: '12px',
  marginBottom: '8px',
  backgroundColor: theme.palette.background.paper,
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
      <IconChevronUp className='expandIconWrapper' />
      <IconChevronDown className='collapsIconWrapper' />
    </Box>
  )
}

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<CustomExpandIcon />} {...props} />
))(({ theme }) => ({
  fontFamily: 'inherit',
  backgroundColor: theme.palette.background.paper,
  flexDirection: 'row-reverse',
  borderRadius: '12px',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'none'
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  borderTop: 'none'
}))

export function Accordion003({ data }: { data: data[] }) {
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
