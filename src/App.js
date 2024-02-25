import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sreejiinfo from './Components/Sreejiinfo';
import './App.css';
import Home from './Components/Home';
import Services from './Components/Services';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';
import Domain from './Components/Domain';
import Portfolio from './Components/Portfolio';
import ScrollToTopButton from './Components/ScrollToTopButton';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Sreejiinfo/>} />
      <Route path='/home' element={<Home/>}/>
      <Route path='/Services' element={<Services/>} />
      <Route path='/Domain' element={<Domain/>}/>
      <Route path='services.Portfolio-management' element={<Portfolio/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <ScrollToTopButton/>
  </BrowserRouter>
   
   
  );
}

export default App;
