import Conteudo from "../Componentes/ConteudoArtigos";
import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import MenuLateral from "../Componentes/MenuLateral";

function Artigos() {
      return (
            <div>
                  <Header/>
                  <Conteudo/>
                  <MenuLateral/>
                  <Footer/>
            </div>
      );
}

export default Artigos