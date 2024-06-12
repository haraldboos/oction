// import request from './request/axios';
import Search from './components/search';
import Sold_out from './components/soldoutdashboard';
import Home from './components/home';
import { Route,Routes } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
import './index.css';


function App() {
  

  return (
<>
<Routes>
<Route path='/' element={<Home/>}/>

  <Route path='player' element={<Search/>}/>
  <Route path='sold' element={<Sold_out/>}/>
</Routes>
{/* <Search/> */}
</>
  )
}

export default App
