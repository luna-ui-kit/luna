import { create } from 'zustand'

interface stateType {
  isOpen: boolean
}

interface drawerType {
  isOpen: boolean
  handleDrawerToggle: () => void
}

export const useDrawerStore = create<drawerType>(set => ({
  isOpen: false,
  handleDrawerToggle: () => {
    console.log('here')
    set((state: stateType) => ({ isOpen: !state.isOpen }))
  }
}))
