import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { UserContext } from "./context/UserContext"

export const ProfessionalApp = () => {
  return (
    <UserContext>
      <div className="bg-gradient">
          <RouterProvider router={appRouter} />
      </div>
    </UserContext>
  )
}
 