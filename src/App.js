import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/' element={<Signup/>}/>
         </Routes>
     </BrowserRouter>
  );
}

export default App;
