import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const INITIAL_USER_INFO = null;

const useUserState = create(
  persist(
    (set, get) => ({
      userInfo: INITIAL_USER_INFO,
      role: false,
      hydrated: false,
      loading: false,
      setUserInfo: (data) => set({ userInfo: data, role: data.role }),
      clearUserInfo: () => set({ userInfo: null, role: false }),
      setLoading: () => {
        const ld = get().loading;
        set({ loading: !ld });
      },
    }),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    }
  )
);

const getUserState = () => useUserState.getState();
export { useUserState, getUserState };
