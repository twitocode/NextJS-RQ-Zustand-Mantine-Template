import create from "zustand";

interface AppStore {
	isLoginModalOpen: boolean;
	isRegisterModalOpen: boolean;
	isCreateTodoModalOpen: boolean;

	toggleLoginModal: () => void;
	toggleRegisterModal: () => void;
	toggleCreateTodoModal: () => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
	isLoginModalOpen: false,
	isRegisterModalOpen: false,
	isCreateTodoModalOpen: false,
	toggleLoginModal: () => set({ isLoginModalOpen: !get().isLoginModalOpen }),
	toggleRegisterModal: () => set({ isRegisterModalOpen: !get().isRegisterModalOpen }),
	toggleCreateTodoModal: () => set({ isCreateTodoModalOpen: !get().isCreateTodoModalOpen }),
}));
