import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import { Routes,Route } from 'react-router-dom';

function App() {
  return(
   <div className='container mx-auto'>
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<Search/>} path="/search/:id" />
    </Routes>
   </div>
  )
}

export default App;
