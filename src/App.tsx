import './App.css'
import Login from './pages/Login'
import { ToastContainer, Bounce } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modal from 'react-modal';
import { ReloadProvider } from './contexto/ReloadContext';

Modal.setAppElement('#root');
function App() {
  return (
    <>
      <Router>
        <ReloadProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </ReloadProvider>
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
