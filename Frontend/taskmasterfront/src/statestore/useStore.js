import { create } from "zustand";

export const useStore = create((set) => ({
    user: null,
    setUser: (userData) => set({user: userData}),
    authenticated: localStorage.getItem('authenticated') === 'true' || false,
    login: () => {
        localStorage.setItem("authenticated", "true");
        set({authenticated: true});
    },
    logout: () => {
        localStorage.removeItem("authenticated");
        localStorage.removeItem("jwt");
        set({authenticated: false});
    },
}));