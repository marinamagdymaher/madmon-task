import { create } from "zustand";

export const useUnitsStore = create((set) => ({
  units: [],
  setUnits: (newUnits) => set({ units: newUnits }),
  removeUnit: (id) =>
    set((state) => ({
      units: state.units.filter((unit) => unit.id !== id),
    })),
}));
