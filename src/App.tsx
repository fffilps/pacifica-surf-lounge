import './App.css'
import Drinks from './components/Drinks'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='flex flex-col'>
      <Navbar />
      <Hero />
      <Drinks />
      <Footer />
    </div>
  )
}

export default App
