import { Route, Routes } from 'react-router-dom'
import './App.css'
import routes from './routes/Routes'

function App() {

  return (
    <>
     <Routes>
         {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
         ))}
      </Routes>
    </>
  )
}

export default App
