'use client'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { useState } from 'react'
import FirstDialogCode from './firstDialogCode'
import SecondDialogCode from './secondDialogCode'
import ThirdDialogCode from './thirdDialogCode'

export default function Code() {
  const [isHidden, setIsHidden] = useState(true)
  const theme = useTheme()

  return (
    <Box
      display='flex'
      flexDirection='column'
      borderRadius='24px'
      gap='16px'
      padding='24px'
      sx={{ background: theme.palette.background.paper }}
    >
      <Box
        display='flex'
        gap='4px'
        alignItems='center'
        justifyContent='space-between'
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setIsHidden(state => !state)
        }}
      >
        <Typography variant='titleMedium'>Code</Typography>

        <IconButton>
          {isHidden ? <IconChevronDown /> : <IconChevronUp />}
        </IconButton>
      </Box>

      {!isHidden && (
        <>
          <FirstDialogCode />
          <SecondDialogCode />
          <ThirdDialogCode />
        </>
      )}
    </Box>
  )
}
