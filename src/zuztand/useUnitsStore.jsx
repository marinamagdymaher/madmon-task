import { create } from "zustand";

const useUnitsStore = create((set) => ({
  units: [],
  setUnits: (newUnits) => set({ units: newUnits }),
  deleteUnitFromState : (id) =>
    set((state) => ({
      units: state.units.filter((unit) => unit.id !== id),
    })),
}));

export default useUnitsStore;
