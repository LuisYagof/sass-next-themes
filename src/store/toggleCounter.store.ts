import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ToggleCounterType {
  timesToggled: number;
  increase: (by: number) => void;
}

export const useToggleCounter = create<ToggleCounterType>()(
  devtools(
    persist(
      (set) => ({
        timesToggled: 0,
        increase: (by) =>
          set((state) => ({ timesToggled: state.timesToggled + by })),
      }),
      {
        name: "toggle-counter-storage",
      }
    )
  )
);
