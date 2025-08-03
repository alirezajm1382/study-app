import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { UserStoreInterface } from '#/types/auth.type'
import { AuthTokenResponsePassword } from '@supabase/supabase-js'

export const useUserStore = create<UserStoreInterface>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      setLogin: (response: AuthTokenResponsePassword) =>
        set({
          user: response.data.user,
          accessToken: response.data.session?.access_token,
          refreshToken: response.data.session?.refresh_token,
        }),
      setUser: (user) => set({ user }),
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
      logout: () => set({ user: null, accessToken: null, refreshToken: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
