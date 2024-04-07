import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    {/* this is the navbar component we created to reuse it whenever required */}
    
    {/* outlet means sare children jo router ke adhar banaye h vo sb show ho->abhi to home hi h bs child */}
    <Outlet/>
  
    </>
  )
}

export default App;
