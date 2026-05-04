/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, useTheme } from '@mui/material'

export const ShowCase = ({
  name,
  component
}: {
  name: string
  component: any
}) => {
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      sx={{
        border: `1px solid ${theme.palette.grey[300]}`
      }}
    >
      <Box
        display='flex'
        padding={'8px 24px'}
        borderRadius='24px 0 24px 0'
        sx={{
          backgroundColor: theme.palette.grey[900],
          width: 'fit-content'
        }}
      >
        <Typography variant='labelMedium' color={theme.palette.grey[100]}>
          {name}
        </Typography>
      </Box>

      <Box padding='16px'>{component}</Box>
    </Box>
  )
}
