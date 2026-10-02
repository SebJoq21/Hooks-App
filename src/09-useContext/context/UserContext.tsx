import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data"

type authStatus = 'checking' | 'authenticated' | 'not-authenticated' 

interface UserContextProps {
    // state
    authStatus: authStatus,
    user: User | null,
    isAuthenticated: boolean,

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
    
    const user = users.find(user => user.id === userId)
    if( !user ) {
      console.log(`User not found ${userId}`)
      setUser(null)
      setAuthStatus('not-authenticated')
      return false
    }

    setUser(user)
    setAuthStatus('authenticated')
    localStorage.setItem('userId', userId.toString())
    return true 
  }
  
  // Se ajusta para que no reciba argumentos, coincidiendo con la interfaz
  const handleLogout = () => {
    setAuthStatus('not-authenticated')
    setUser(null)
    localStorage.removeItem('userId')
  }

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    
    if( storedUserId ){
      handleLogin(+storedUserId)
      return
    }

    handleLogout()
  }, [])

  return (
    <UserContext value={{
            authStatus: authStatus,
            user: user,
            isAuthenticated: authStatus === 'authenticated',
             
            login: handleLogin,
            logout: handleLogout
        }}>
        {children}
    </UserContext>
  )
}