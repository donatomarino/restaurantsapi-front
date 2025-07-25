import './App.css'
import Login from './pages/Login'
import { ToastContainer, Bounce } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modal from 'react-modal';
import { LoadProvider } from './contexto/LoadContext';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';

Modal.setAppElement('#root');
function App() {
  return (
    <>
      <Router>
        <LoadProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/unauthorized' element={<Unauthorized />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </LoadProvider>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}

export default App
