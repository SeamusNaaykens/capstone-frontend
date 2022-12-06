import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header/Header.js'
import Homepage from '../src/pages/Homepage/Homepage.js'
import Footer from '../src/components/Footer/Footer.js'
import Profile from '../src/pages/Profile/Profile.js'
import LearningChannel from '../src/pages/LearningChannel/LearningChannel.js'
import Login from '../src/pages/Login/Login.js'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/:profileId' element={<Profile/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='learningChannel' element={<LearningChannel/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
