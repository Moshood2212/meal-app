
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Singlemeal from './Pages/Singlemeal'
import Error from './Pages/Error'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <div className='container-md'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path='/meal/:mealId' element={<Singlemeal />}/>
          {/* single page route */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

  

export default App
