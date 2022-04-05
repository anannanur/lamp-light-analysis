
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Reviews from './Components/Reviews/Reviews';
import Blogs from './Components/Blogs/Blogs';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <div>    
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
    </div>

  );
}

export default App;
