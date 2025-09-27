import Navbar from './components/Navbar'
import MainContent from './components/Maincontent'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
    <main className='ahmed'> 
      <Navbar />
      <div className='wrapper'>
      <MainContent />
      </div>
      <Footer />
      </main>
    </>
  )
}

export default App
