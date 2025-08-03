import { AuthTokenResponsePassword, User } from '@supabase/supabase-js'

export interface AuthFormProps {
  email: string
  password: string
}

export type UserStoreInterface = {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  setLogin: (response: AuthTokenResponsePassword) => void
  setUser: (user: User | null) => void
  setTokens: (accessToken: string, refreshToken: string) => void
  logout: () => void
}
