import { IconArrowLeft } from '@tabler/icons-react'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <div>
      <main>
        <IconArrowLeft />

        <Typography variant='bodyLarge'>Heeeeey</Typography>

        <Button variant='contained' color='primary'>
          Hello world
        </Button>
      </main>
    </div>
  )
}
