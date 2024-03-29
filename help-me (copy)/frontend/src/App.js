
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import {Route,BrowserRouter as Router, Routes} from "react-router-dom"
import Submission from './Components/Submission';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/home' element= {<Home/>} />
        <Route path='/finish' element={<Submission/>}/>
        
        
      </Routes>
      
    </Router>
  );
}

export default App;
