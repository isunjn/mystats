import { create } from "zustand";

type State = {
  theme: "light" | "dark";
};

type Actions = {
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
};

const useCommonStore = create<State & Actions>()((set) => ({
  theme: "light",
  setTheme: (theme: "light" | "dark") => set({ theme }),
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useCommonStore;
