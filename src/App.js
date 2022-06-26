
import './App.css';
import SecondPage from './SecondPage';
import {Route, Routes} from 'react-router-dom'

import Header from './components/Header';
import Hero from './components/Hero';
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo.js';
import Team from './components/Team.js';
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
     <Header />
     <Hero />
     <ChapterOne/>
     <ChapterTwo />
     <Team />
     <Footer/>
     
      <Routes>
     
      <Route path="/secondPage" element={<SecondPage />}></Route>
      </Routes>
   
  
   
               
    </div>
  );
}

export default App;
