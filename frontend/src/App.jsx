
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {


  return (
    <>
      <CartProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </CartProvider>
    </>
  )
}

export default App
