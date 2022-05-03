import './App.scss'
import 'swiper/swiper.min.css'
import './assets/boxicons-2.1.2/css/boxicons.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Header from './components/header/Header';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:category/search/:keyword" element={<Catalog />}/>
        <Route path="/:category/id" element={<Detail />}/>
        <Route path="/:category" element={<Catalog />}/>
        <Route path="/" exact element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
