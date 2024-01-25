import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
//import Home, { tasksLoader } from './pages/Home'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create , {createAction} from './pages/Create'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<MainLayout/>} >
        <Route path="/" element={<Home />} /> {/* loader={tasksLoader} */} 
        <Route path="create" element={<Create />} action={createAction} />
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
