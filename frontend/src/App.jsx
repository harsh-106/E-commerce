import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Home from './Components/Home'
import Description from './Components/Description'

const appRouter = createBrowserRouter([
	{
		path:'/',
		element:<Home/>
	  },
	  {
		path:'/login',
		element:<Login/>
	  },
	  {
		path:'/signup',
		element:<Signup/>
	  },
	  {
		path:"/description/:id",
		element:<Description/>
	  },
])

function App() {

  return (
<>
<RouterProvider router = {appRouter} />

</>

  )
}

export default App
