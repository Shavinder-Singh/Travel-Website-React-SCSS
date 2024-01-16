import './App.css'
import Destination from './components/Destinations/Destination'
import Footer from './components/Footer/Footer'
import Middle from './components/Middle/Middle'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Question from './components/Question/Question'
import Reviews from './components/Reviews/Reviews'
import Subscribe from './components/Subscribe/Subscribe'
import Home from './components/home/Home'
function App() {
  return (
    <>

      <Navbar />
      <Home />
      <Middle />
      <Destination />
      <Portfolio />
      <Reviews />
      <Question />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
