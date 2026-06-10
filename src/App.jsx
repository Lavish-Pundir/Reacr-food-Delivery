
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import AppRoutes from './router/AppRoutes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer />
    </BrowserRouter>
  )
};
export default App
