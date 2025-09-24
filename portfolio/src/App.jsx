import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contats';
import Projects from './Pages/Project'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        
        

      </Routes>
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </BrowserRouter>
    
  );
}
export default App