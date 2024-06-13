import Footer from "../Componentes/Footer";
import Header from "../Componentes/Header";
import MenuLateral from "../Componentes/MenuLateral";
import imagemHome from "../Assets/imagemHome.png"

function Home() {
      return (
            <div>
                <Header/>
                <MenuLateral/>
                <div className="conteudo-Inicio">
                    <img src={imagemHome} id="imagemInicio"/>
                    <p>Bem-vindos ao EducaWeb: O lugar onde o Universo da Leitura Infantil ganha vida!
Convidamos você a explorar um amplo espaço de livros projetados para encantar e educar as nossas crianças.
Aqui em nosso site, você encontrará uma diversidade de livros com muitas histórias que inspiram, encantam e ensinam. Histórias repletas de imaginação que transmitem valores importantes para o crescimento de cada criança. 
Além disso, nós do EducaWeb, também compartilhamos artigos sobre a importância da leitura e os benefícios que ela traz. Explore conosco como a leitura ajuda no desenvolvimento, estimula a imaginação e a criatividade, promovendo habilidades linguísticas e um interesse a longo prazo pelos livros.
Acreditamos que cada livro é uma abertura para novas aventuras e aprendizados. Junte-se a nós do EducaWeb para essa caminhada emocionante rumo ao universo da leitura</p>
                </div>
                <Footer/>
            </div>
      );
}

export default Home