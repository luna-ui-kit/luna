import { IconArrowLeft } from '@tabler/icons-react'
import { Card, Typography } from '@mui/material'
import { Button } from '@/luna/components'

export default function Home() {
  return (
    <div>
      <main style={{ height: '100vh' }}>
        <IconArrowLeft />

        <Card elevation={2} sx={{ width: '100px', margin: 'auto' }}>
          <Typography variant='bodyLarge'>Heeeeey</Typography>
          <Button variant='outlined' size='medium'>
            werty
          </Button>
        </Card>
      </main>
    </div>
  )
}
