import './App.css'
import Login from './pages/Login'
import { ToastContainer, Bounce } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modal from 'react-modal';
import { LoadProvider } from './contexto/LoadContext';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="h-screen grid grid-rows-[1fr_auto] overflow-hidden">
      <div className="overflow-hidden flex">
        <Router>
          <LoadProvider>
            <div className="w-full overflow-hidden">
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/unauthorized' element={<Unauthorized />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </LoadProvider>
        </Router>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        theme="dark"
        transition={Bounce}
      />
    </div>
  )
}

export default App