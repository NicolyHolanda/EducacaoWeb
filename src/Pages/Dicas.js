import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import Livros from "../Componentes/Livros";
import MenuLateral from "../Componentes/MenuLateral";

function Dicas() {
      return (
            <div>
                <Header/>
                <MenuLateral/>
                <h1 className="tituloPagina">Nós reunimos alguns livros que encontramos para indicar como leitura:</h1>
                <Livros/>
                <Footer/>
            </div>
      );
}

export default Dicas