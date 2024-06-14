import imagem from "../Assets/imagemHome.png"

function Inicio() {
     
    return(               
        <div class="home">
            <h1 className="tituloPagina">Bem-vindos ao EducaWeb:</h1>
            <h2 id="subtitulo">O lugar onde o Universo da Leitural ganha vida! Convidamos você a explorar um amplo espaço de livros projetados para encantar e educar.</h2>

            <div class="content-inicio">
                <img className="imagem-inicio" src={imagem}/>
                <div class="texto-inicio">
                    <p className="descricaoInicio">
                        Aqui em nosso site, você encontrará uma diversidade de livros com muitas histórias que inspiram, encantam e ensinam. Histórias repletas de imaginação que transmitem valores importantes para o crescimento.
                    </p>
                    <p className="descricaoInicio">
                        Além disso, nós do EducaWeb, também compartilhamos artigos sobre a importância da leitura e o benefício que ela traz. Explore conosco como a leitura ajuda no desenvolvimento, estimula a imaginação e a criatividade, promovendo habilidades linguísticas e um interesse a longo prazo pelos livros.
                    </p>
                    <p className="descricaoInicio">
                        Acreditamos que cada livro é uma abertura para novas aventuras e aprendizados. Junte-se a nós do EducaWeb para essa caminhada emocionante rumo ao universo da leitura!
                    </p>
                </div>
            </div>
        </div>
     );
}
export default Inicio