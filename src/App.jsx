import { BrowserRouter } from 'react-router-dom'
import { Login } from './pages/Login'
import { RouteComponent } from './route'

function App() {

  return (
    <BrowserRouter>
      <RouteComponent/>
    </BrowserRouter>
  )
}
export default App