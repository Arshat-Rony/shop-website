import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/Notfound'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path='/home' element={<Home></Home>}>Home</Route>
        <Route path='/about' element={<About></About>}>About</Route>
        <Route path='/reviews' element={<Reviews></Reviews>}>Reviews</Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>Dashboard</Route>
        <Route path='/blogs' element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='*' element={<Notfound></Notfound>}>Blogs</Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
