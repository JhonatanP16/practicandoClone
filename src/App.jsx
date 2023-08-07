import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Top from "./components/Top/Top"
import { useSelector } from "react-redux"
import Details from "./pages/Details/Details"
import Episodio from "./pages/Episodio/Episodio"
import Dramas from "./pages/Dramas/Dramas"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage"
function App() {
  const {dark} = useSelector((state) => state.theme);
  return (
    <div className={`app ${dark ? 'darkMode' : ''}`}>
    <Top/>
    <ToastContainer
      limit={3}
      position="top-right"
      autoClose={1000}
      pauseOnHover={false}
      theme="colored"
    />
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detalle/:name" element={<Details/>}/>
        <Route path="/episodio/:name" element={<Episodio/>}/>
        <Route path="/dramas" element={<Dramas/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
