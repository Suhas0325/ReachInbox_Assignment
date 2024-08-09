import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Email from './Pages/Emails/Email';
import Redirect from './Component/Redirect/Redirect';

function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path='/onebox' element={<Home/>}></Route>
          <Route path='/' element={<Signup/>}/>
          
         </Routes>
     </BrowserRouter>
  );
}

export default App;
