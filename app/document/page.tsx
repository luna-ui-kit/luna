import { Grid2 as Grid } from '@mui/material'
import { Metadata } from 'next'
import { Sidebar } from './_components/sidebar'
import { GettingStarted } from './_components/gettingStarted'
import { Colors } from './_components/colors'
import { Elevation } from './_components/elevation'
import { Icons } from './_components/icons'
import { TypographySection } from './_components/typography'
import { ButtonSection } from './_components/button'
import { CheckboxSection } from './_components/checkbox'
import { RadioGroupSection } from './_components/radioGroup'
import { SwitchSection } from './_components/switch'
import { TextFieldSection } from './_components/textField'
import { HomepageSection } from './_components/homepage'
import { ChipSection } from './_components/chip'
import { AvatarSection } from './_components/avatar'

export const metadata: Metadata = {
  title: 'Luna | Document',
  description: '...'
}

export default function Page() {
  return (
    <Grid container spacing={0}>
      <Sidebar />

      <Grid
        size={{ xs: 12, sm: 12, md: 9 }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '24px'
        }}
        id='GettingStarted'
      >
        <GettingStarted />
        <Colors />
        <Elevation />
        <Icons />
        <TypographySection />
        <AvatarSection />
        <ButtonSection />
        <CheckboxSection />
        <ChipSection />
        <RadioGroupSection />
        <SwitchSection />
        <TextFieldSection />
        <HomepageSection />
      </Grid>
    </Grid>
  )
}
