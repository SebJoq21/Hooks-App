import { createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data"

type authStatus = 'checking' | 'authenticated' | 'not-authenticated' 

interface UserContextProps {
    // state
    authStatus: authStatus,
    user: User | null

    // methods
    login: (userID: number) => boolean, // Espera retornar un booleano
    logout: () => void                  // Espera no recibir argumentos
}

// 1. El objeto del contexto mantiene el nombre UserContext
export const UserContext = createContext({} as UserContextProps);

// 2. El componente se renombra a UserProvider
export const UserProvider = ({children}: PropsWithChildren) => {
  
  const [authStatus, setAuthStatus] = useState<authStatus>('checking')  
  const [user, setUser] = useState<User|null>(null)  

  // Se ajusta para que retorne un boolean como pide la interfaz
  const handleLogin = (userId: number) => {
    console.log({userId})
    return true; 
  }
  
  // Se ajusta para que no reciba argumentos, coincidiendo con la interfaz
  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <UserContext.Provider value={{
            authStatus: authStatus,
            user: user,
            login: handleLogin,
            logout: handleLogout
        }}>
        {children}
    </UserContext.Provider>
  )
}