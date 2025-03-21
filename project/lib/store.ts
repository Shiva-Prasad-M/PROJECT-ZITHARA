import { create } from 'zustand'

interface JobFilters {
  search: string
  category: string
  location: string
  type: string
}

interface JobStore {
  filters: JobFilters
  setFilters: (filters: Partial<JobFilters>) => void
  resetFilters: () => void
}

const initialFilters: JobFilters = {
  search: '',
  category: '',
  location: '',
  type: '',
}

export const useJobStore = create<JobStore>((set) => ({
  filters: initialFilters,
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  resetFilters: () => set({ filters: initialFilters }),
}))