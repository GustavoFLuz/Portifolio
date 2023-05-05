import { AppThemeProvider } from "./shared/contexts"
import { router } from "./router"
import { RouterProvider } from "react-router-dom"
import { CssBaseline } from "@mui/material"

function App() {
  return (
    <AppThemeProvider>
      <CssBaseline />
      <RouterProvider router={router} />
    </AppThemeProvider>
  )
}

export default App
