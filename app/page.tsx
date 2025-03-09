import { IconArrowLeft } from '@tabler/icons-react'
import { Card, Typography, FormGroup, FormControlLabel } from '@mui/material'
import { Button, Checkbox } from '@/luna/components'

export default function Page() {
  return (
    <div>
      <main style={{ height: '100vh' }}>
        <IconArrowLeft />

        <Card
          elevation={2}
          sx={{
            display: 'flex',
            gap: '24px',
            maxWidth: '400px',
            flexDirection: 'column',
            margin: 'auto',
            padding: '40px'
          }}
        >
          <Typography variant='headlineMedium'>Heeeeey</Typography>

          <Button variant='contained'>Button</Button>

          <Button variant='link'>Button</Button>

          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='Label' />
          </FormGroup>
        </Card>
      </main>
    </div>
  )
}
