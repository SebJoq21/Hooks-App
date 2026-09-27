import { useState, type PropsWithChildren } from "react"

// interface UserContextProps {
//     children: React.ReactNode
// }

export const UserContext = ({children}: PropsWithChildren) => {
  
  const [name, setName] = useState('Sebastian')  

  return (
    <>
      {children}  
    </>
  )
}
