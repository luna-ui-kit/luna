import { IconArrowLeft } from '@tabler/icons-react'
import {
  Card,
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  RadioGroup
} from '@mui/material'
import { Button, Checkbox, Radio, Switch, TextField } from '@/luna/components'

export default function Page() {
  return (
    <div>
      <main style={{ height: '100vh' }}>
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

          <IconArrowLeft />

          <Button variant='contained'>Button</Button>

          <Button variant='link'>Button</Button>

          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='Label' />
          </FormGroup>

          <FormControl>
            <RadioGroup
              defaultValue='female'
              aria-labelledby='demo-customized-radios'
              name='customized-radios'
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
              <FormControlLabel
                value='disabled'
                disabled
                control={<Radio />}
                label='(Disabled option)'
              />
            </RadioGroup>
          </FormControl>

          <FormGroup>
            <FormControlLabel
              control={<Switch sx={{ m: 1 }} defaultChecked />}
              label='Switch'
            />
          </FormGroup>

          <TextField label='Outlined' multiline minRows={4} />
        </Card>
      </main>
    </div>
  )
}
