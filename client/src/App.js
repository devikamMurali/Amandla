import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Home from './pages/Home/Home';
import Log from './pages/Home/Log';
import Regi from './pages/Home/Regi';
import Regu from './pages/Home/Regu';
import Regdr from './pages/Home/Regdr';
import Driver from './pages/Home/Driver';
import User from './pages/Home/User';
import Lod from './pages/Home/Lod';
import Truk from './pages/Home/Truk';

import Feedback from './pages/Home/Feedback';
import About from './pages/Home/About'; 
import Contct from './pages/Home/Contct';
import Admin from './pages/Admin';
import Aduser from './pages/Aduser';
import Addriver from './pages/Home/Addriver';
import Adload from './pages/Home/Adload';
import Adtruck from './pages/Home/Adtruck';
import Viewfeedback from './pages/Home/Viewfeedback';
import Trukviw from './pages/Home/Trukviw';
import Loadviw from './pages/Home/Loadviw';
import Request from './pages/Home/Request';
import Status from './pages/Home/Status';
import Viewstatus from './pages/Home/Viewstatus';
import Viewc from './pages/Home/Viewc';
import Send from './pages/Home/Send';
import Viewsend from './pages/Home/Viewsend';

import Edit from './pages/Home/Edit';

 

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Log/>}/>
      <Route path='/registers' element={<Regi/>}/>
      <Route path='/Registeruser' element={<Regu/>}/>
      <Route path='/Registerdriver' element={<Regdr/>}/>
      <Route path='/load/:id' element={<Lod/>}/>
      <Route path='/trk' element={<Truk/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/contact' element={<Contct/>}/>
      <Route path='/User' element={<User/>}/>
      <Route path='/Driver' element={<Driver/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/adminuser' element={<Aduser/>}/>
      <Route path='/admindriver' element={<Addriver/>}/>
      <Route path='/adminload' element={<Adload/>}/>
      <Route path='/admintruck' element={<Adtruck/>}/>
      <Route path='/feedbackview' element={<Viewfeedback/>}/>
      <Route path='/truckview' element={<Trukviw/>}/>
      <Route path='/loadview' element={<Loadviw/>}/>
      <Route path='/accept' element={<Request/>}/>
      <Route path='/status' element={<Status/>}/>
      <Route path='/viewstatus' element={<Viewstatus/>}/>
      <Route path='/viewcontact' element={<Viewc/>}/>
      <Route path='/send' element={<Send/>}/>
      <Route path='/viewsend' element={<Viewsend/>}/>
      
      
  
      <Route path='/pro' element={<Edit/>}/>

      

      
      
      
      
      

    </Routes>  
    </BrowserRouter>
    
  );
}

export default App;
