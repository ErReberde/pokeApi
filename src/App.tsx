
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Navbar from './components/NavBar/Navbar.tsx'
import PokemonList from './pages/PokemonList/index.tsx'
import PokemonDetails from './pages/PokemonDetails/index.tsx'
import MyPokemons from './pages/MyPokemons/index.tsx'
import  store  from "./redux/store.ts"
import { Provider } from 'react-redux'
const router = createBrowserRouter([
      
      {
        path: "/",
        element: <Navbar/>,
        children:[
          {
            path: "",
            element: <PokemonList/>,
            caseSensitive: false
          },
          {
            path: "MyPokemons",
            element: <MyPokemons/>,
            caseSensitive: false
          },
          {
            path: "pokemon/:id",
            element: <PokemonDetails/>,
            caseSensitive: false
          },
          {
            path: "*",
            element: <h1>404 NOT FOUND</h1>,
            caseSensitive: false
          }
        ]
      }

    
])
function App() {


  return (

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
      
    
  )
}

export default App
