import { Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
     <Routes>
       {/* main layout */}
       <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
       </Route>

     </Routes>
    </>
  )
}
export default App