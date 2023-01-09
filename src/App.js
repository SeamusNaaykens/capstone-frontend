import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../src/components/Header/Header.js'
import Homepage from '../src/pages/Homepage/Homepage.js'
import Footer from '../src/components/Footer/Footer.js'
import Profile from '../src/pages/Profile/Profile.js'
import LearningChannel from '../src/pages/LearningChannel/LearningChannel.js'
import FindProfiles from '../src/pages/FindProfiles/FindProfiles.js'
import EditProfile from '../src/pages/EditProfile/EditProfile.js'
import EditPost from '../src/pages/EditPost/EditPost.js'
import AddPost from '../src/pages/AddPost/AddPost.js'
import AddProfile from '../src/pages/AddProfile/AddProfile.js'
import Login from '../src/pages/Login/Login.js'
import { useState} from 'react'


function App() {

  const [ isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <Header isLoggedIn={isLoggedIn}/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/:profileId' element={<Profile/>}/>
      <Route path='findProfiles' element={<FindProfiles/>}/>
      <Route path='learningChannel' element={<LearningChannel/>}/>
      <Route path='/:profileId/editProfile' element={<EditProfile/>}/>
      <Route path='/:postId/editPost' element={<EditPost/>}/>
      <Route path='/:profileId/addPost' element={<AddPost/>}/>
      <Route path='/addProfile' element={<AddProfile/>}/>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
