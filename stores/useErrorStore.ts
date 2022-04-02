import create from "zustand";

interface ErrorStore {
	loginError: string | null;
	registerError: string | null;

	setLoginError: (e: string | null) => void;
	setRegisterError: (e: string | null) => void;
}

export const useErrorStore = create<ErrorStore>((set, get) => ({
	loginError: null,
	registerError: null,
	setLoginError: (e: string | null) => set({ loginError: e }),
	setRegisterError: (e: string | null) => set({ registerError: e }),
}));
