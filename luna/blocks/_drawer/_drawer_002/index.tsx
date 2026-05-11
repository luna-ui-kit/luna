import { Button } from '@/luna/components'
import { useDrawerStore } from './_drawerComponent/_store'
import { Drawer } from './_drawerComponent'

export const Drawer002 = () => {
  const { handleDrawerToggle } = useDrawerStore(state => state)

  return (
    <>
      <Button onClick={handleDrawerToggle} variant='contained'>
        Open Drawer 002
      </Button>

      <Drawer />
    </>
  )
}
