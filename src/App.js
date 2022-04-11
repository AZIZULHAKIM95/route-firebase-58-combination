import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
