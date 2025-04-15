'use client'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { Alert, Button } from '@/luna/components'
import {
  IconCircleCheck,
  IconEyeglass2,
  IconInfoSquareRounded,
  IconX
} from '@tabler/icons-react'

export const Overview = () => {
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
      <Box display='flex' flexDirection='column' gap='4px'>
        <Typography variant='titleMedium'>Alert</Typography>
      </Box>

      <Box display='flex' flexDirection='column' gap='16px'>
        <Alert
          icon={<IconCircleCheck />}
          severity='success'
          action={
            <IconButton color='inherit' size='small'>
              <IconX />
            </IconButton>
          }
        >
          <Typography variant='titleSmall' color='inherit'>
            Congratulations!
          </Typography>
          <Typography variant='bodySmall'>
            Your OS has been updated to the latest version. Current OS Version
            4.3.17863.289
          </Typography>
        </Alert>

        <Alert icon={<IconInfoSquareRounded />} severity='info'>
          <Typography variant='titleSmall' color='inherit'>
            Did you know?
          </Typography>
          <Typography variant='bodySmall'>
            You can now switch screen by pressing WIN + SHIFT
          </Typography>
        </Alert>

        <Alert icon={<IconEyeglass2 />} severity='warning'>
          <Typography variant='titleSmall' color='inherit'>
            Warning
          </Typography>
          <Typography variant='bodySmall'>
            Careful! please, never look behind... i said NEVER!
          </Typography>
        </Alert>

        <Alert
          icon={false}
          severity='error'
          action={
            <Button variant='contained' size='small'>
              Turn On
            </Button>
          }
        >
          <Typography variant='titleSmall' color='inherit'>
            Something went wrong!
          </Typography>
          <Typography variant='bodySmall'>
            Your device turned off unexpectedly.
          </Typography>
        </Alert>
      </Box>
    </Box>
  )
}
