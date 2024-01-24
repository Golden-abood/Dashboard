import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="profile" element={<Profile />} />
      </Route>
  )   
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
