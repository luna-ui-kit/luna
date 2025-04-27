'use client'
import { useTheme } from '@mui/material'
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'

interface Props {
  data: any
  columns: any
}

export const Table = ({ data, columns }: Props) => {
  const theme = useTheme()
  const table = useMaterialReactTable({
    columns,
    data: data,
    enableTopToolbar: false,
    muiPaginationProps: {
      rowsPerPageOptions: [10, 20, 50, 100],
      color: 'primary',
      shape: 'rounded',
      variant: 'outlined'
    },
    muiTablePaperProps: {
      elevation: 0,
      sx: {
        background: 'white',
        padding: '16px',
        borderRadius: '24px',
        border: `1px solid ${theme.palette.grey[200]}`
      }
    },
    muiTableContainerProps: {
      sx: { background: theme.palette.background.default, borderRadius: '8px' }
    },
    muiTableBodyRowProps: {
      sx: { background: `${theme.palette.background.paper} !important` }
    },
    muiBottomToolbarProps: {
      sx: { background: `${theme.palette.background.paper} !important` }
    },
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true
    },
    positionActionsColumn: 'last'
  })

  return <MaterialReactTable table={table} />
}
