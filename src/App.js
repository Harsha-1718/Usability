import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import  SignIn  from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import Home from './Components/auth/Home';
import Main_homepage from './Components/auth/Main_homepage';




function App() {
  return (
    
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Main_homepage/>}/>
        <Route path="signIn" element={<SignIn/>}/>
        <Route path="signUp" element={<SignUp/>}/>
        <Route path="home" element={<Home/>}/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
