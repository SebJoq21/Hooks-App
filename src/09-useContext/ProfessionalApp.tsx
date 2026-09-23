import { RouterProvider } from "react-router"
import { appRouter } from "./router/App.router"

export const ProfessionalApp = () => {
  return (
    <div className="bg-gradient">
        <RouterProvider router={appRouter} />
    </div>
  )
}
 