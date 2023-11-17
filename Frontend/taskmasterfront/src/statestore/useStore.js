import { create } from "zustand";

export const useStore = create((set) => ({
    user: null,
    setUser: (userData) => set({user: userData}),
}));