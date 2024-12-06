
import { useLocation,Routes,Route } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ContextProvider } from "./components/utils/global.context";
import Home from "./pages/Home";
import Favs from "./pages/Favs";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";

function App() {
   
  return (
    <ContextProvider>
      

      <div className="App">
        
        <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/favoritos' element={<Favs/>}></Route>
            <Route path='/detail/:id' element={<Detail/>}></Route>
            <Route path='contactenos' element={<Contact/>}></Route>
         </Routes>
         <Footer/>
      </div>
      
    </ContextProvider>

  );
}

export default App;
