import './App.css'
import Drinks from './components/Drinks'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ImageGallery from './components/ImageGallery'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='flex flex-col'>
      <Navbar />
      <LoadingScreen />
      <Hero />
      <Drinks />
      <ImageGallery />
      <Footer />
    </div>
  )
}

export default App
