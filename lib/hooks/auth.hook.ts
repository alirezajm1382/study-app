import { supabase } from '#/supabase/client'
import { AuthFormProps } from '#/types/auth.type'
import { useUserStore } from '#/stores/auth.store'

export const useAuth = () => {
  const { setLogin, logout } = useUserStore()
  const login = async (formData: AuthFormProps) => {
    return await supabase.auth
      .signInWithPassword({ ...formData })
      .then(async (data) => await setLogin(data))
  }

  const signUp = async (formData: AuthFormProps) => {
    return await supabase.auth.signUp({
      ...formData,
      options: {
        emailRedirectTo: process.env.NEXT_REDIRECT_URL,
      },
    })
  }

  const logOut = async () => {
    return await supabase.auth.signOut().then(() => logout())
  }

  return { login, signUp, logOut }
}
