'use client'
import {
  Breadcrumbs as MuiBreadcrumbs,
  Link as MuiLink,
  Typography
} from '@mui/material'
import { IconChevronRight } from '@tabler/icons-react'
import Link from 'next/link'

interface link {
  url: string
  label: string
  icon?: React.ReactNode
}

interface dataType {
  links: link[]
  current: {
    label: string
    icon?: React.ReactNode
  }
}

export const Breadcrumbs = ({ data }: { data: dataType }) => {
  return (
    <MuiBreadcrumbs
      aria-label='breadcrumb'
      separator={<IconChevronRight size={12} />}
    >
      {data.links.map((link, _) => (
        <MuiLink
          key={_}
          component={Link}
          underline='hover'
          variant='bodySmall'
          color='text.primary'
          href={link.url}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            '& svg': { width: '16px', height: '16px' }
          }}
        >
          {link.icon && link.icon}
          {link.label}
        </MuiLink>
      ))}

      {data.current && (
        <Typography
          sx={{
            color: 'text.disabled',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            '& svg': { width: '16px', height: '16px' }
          }}
          variant='bodySmall'
        >
          {data.current.icon && data.current.icon}
          {data.current.label}
        </Typography>
      )}
    </MuiBreadcrumbs>
  )
}
