import './App.css'
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import Appbar from './components/Appbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Landing from './components/Landing';
import RecordingPage from './components/RecordingPage';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { userState } from './store/atoms/user';
import { useEffect } from 'react';
import axios from "axios"

function App() {
 

  return (
    <>
    <RecoilRoot>
        <Router>
          <Appbar/>
          <InitUser/>
          <Routes>
            <Route path="/" element = {<Landing/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/recording" element={<RecordingPage/>}/>
          </Routes>
        </Router>
      </RecoilRoot>
    </>

  )
}

function InitUser(){
  const setUser = useSetRecoilState(userState)
  const init = async () => {
    try {
      const response = await axios.get(`${Base_URL}/admin/me`, {
        headers: {
       "Authorization": "Bearer " + localStorage.getItem("token")
       }
    })
console.log(response.data._id)
    if (response.data.username) {
       setUser({
        isLoading : false,
        userEmail : response.data.username
       })
     }else{
      setUser({
        isLoading : false,
        userEmail : null
       })
     }
    } catch (error) {
      setUser({
        isLoading : false,
        userEmail : null
       })
    }  
 } 

 useEffect(() => {
  init()
 }, [])
}

export default App
