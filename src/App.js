
import './App.css';
import CustomButton from './components/CustomButton';
import Navbar1 from './components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import News from './Pages/News';
import about from './Pages/about';
import services from './Pages/services';
import Products from './Pages/products';
import MyCounter from './Pages/MyCounter';
import Navbar_2 from './components/navigation';
import Contact from './Pages/contact';
function App() {
  return (
    <div>
    
    <h1>use above navigation to move diff pages </h1>
   <BrowserRouter>
   <Navbar_2/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/News' element={<News/>}/>
          <Route path='/about' element={<about/>}/>
          <Route path='/services' element={<services/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/MyCounter' element={<MyCounter/>}/>
          <Route path='/contact' element={<Contact/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
