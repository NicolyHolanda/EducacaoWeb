import imagem from "../Assets/imagemHome.png"

function Inicio() {
     
    return(               
        <div class="home">
            <h3>Bem-vindos ao EducaWeb: O lugar onde o Universo da Leitura Infantil ganha vida! Convidamos você a explorar um amplo espaço de livros projetados para encantar e educar as nossas crianças.</h3>

            <div class="content-inicio">
                <img className="imagem-inicio" src={imagem}/>
                <div class="texto-inicio">
                    <p>
                        Aqui em nosso site, você encontrará uma diversidade de livros com muitas histórias que inspiram, encantam e ensinam. Histórias repletas de imaginação que transmitem valores importantes para o crescimento de cada criança.
                    </p>
                    <p>
                        Além disso, nós do EducaWeb, também compartilhamos artigos sobre a importância da leitura na infância e o benefício que ela traz. Explore conosco como a leitura ajuda no desenvolvimento da criança, estimula a imaginação e a criatividade, promovendo habilidades linguísticas e um interesse a longo prazo pelos livros.
                    </p>
                    <p>
                        Acreditamos que cada livro é uma abertura para novas aventuras e aprendizados. Junte-se a nós do EducaWeb para essa caminhada emocionante rumo ao universo da leitura infantil!
                    </p>
                </div>
            </div>
        </div>
     );
}
export default Inicio