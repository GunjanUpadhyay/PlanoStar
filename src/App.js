import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaQuery.scss";

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
