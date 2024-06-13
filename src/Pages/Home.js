import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import MenuLateral from "../Componentes/MenuLateral";
import Inicio from "../Componentes/Inicio";

function Home() {
      return (
            <div>
                <Header/>
                <MenuLateral/>
                <Inicio/>  
                <Footer/>
            </div>
      );
}

export default Home