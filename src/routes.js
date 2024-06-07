import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Dicas from "./Pages/Dicas";
import Artigos from "./Pages/Artigos";

function Rotas() {
   return (
      <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path= "/dicas" element={<Dicas/>}/>
            <Route path= "/artigos" element={<Artigos/>}/>
      </Routes>
   )   
}

export default Rotas