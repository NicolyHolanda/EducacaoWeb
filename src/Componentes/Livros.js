import manualMundo from"../Assets/Livro-Manual-Mundo.png"
import livroMalala from"../Assets/Livro-Malala.png"
import corpoHumano from"../Assets/Livro-Manual-Mundo2.png"
import turmaMonica from"../Assets/Livro-Monica.png"
import turmaMonicaHoras from"../Assets/Livro-Monica2.png"
import manualQuimica from"../Assets/Livro-Manual-Mundo3.png"
import souMalala from"../Assets/Livro-Malala2.png"
import algoritimos from"../Assets/Livro-Algoritmo.png"
import matematica from "../Assets/Livro-Matematica.png"
import meninoPijama from "../Assets/Livro-Pijama-Listrado.png"
import mundo from "../Assets/Livro-Mundo.png"
import criancalivro from "../Assets/Historia-Mundo.png"
function Livros() {

	return(
        <div>
            <div className="caixas">
                    <img src={manualMundo} className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">O Grande Livro de Matemática do Manual Mundo</h3>
                    <p className="descricao">Anotações incríveis e divertidas para você aprender sobre o intrigante universo dos números e das formas geométricas.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={livroMalala}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Malala</h3>
                    <p className="descricao">Malala Yousafzai quase perdeu a vida por querer ir para a escola.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={corpoHumano}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Meu Caderno de Atividades do Corpo Humano</h3>
                    <p className="descricao">Um guia para as crianças entenderem o fantastico copor humano, com passatempos, desenhos para colorir e muito mais.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src= {turmaMonica}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Turma da Mônica Atlas</h3>
                    <p className="descricao">A Turma da Mônica adora aprender sobre as diferentes culturas do mundo. O que você acha de embarcar nessa viagem repleta de aprendizado também? Neste Atlas, você vai conhecer um pouco mais sobre vários lugares do mundo.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={turmaMonicaHoras}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Turma da Mônica - Que horas São?</h3>
                    <p className="descricao">Mônica, Cebolinha, Magali e Cascão se reuniram mais uma vez por um motivo especial: ensinar as horas para você e falar sobre os números.Junte-se ao quarteto e faça muitas descobertas sobre esse universo numérico.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={manualQuimica}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">O Grande Livro de Química do Manual Mundo</h3>
                    <p className="descricao">Anotações incríveis e divertidas para você aprender sobre átomos, moléculas e reações químicas.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={souMalala}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Eu sou Malala</h3>
                    <p className="descricao">Uma jovem comum, Malala Yousafzai gostava acompanhar seus programas de TV preferidos, vivia brigando com os irmãos e adorava ir à escola. Mas em pouco tempo tudo mudaria. Ela tinha apenas dez anos quando o Talibã tomou conta do vale do Swat</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={algoritimos}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Entendendo Algoritmos</h3>
                    <p className="descricao">Um guia ilustrado para programadores e outros curiosos.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={matematica}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Humor Para Aprender Matemática</h3>
                    <p className="descricao">Este é um livro destinado a alunos, tendo como objetivo apoiar a aprendizagem da Matemática, tanto em contextos de sala de aula como extra sala de aula, de uma forma aprazível.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={meninoPijama}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">O Menino do Pijama Listrado</h3>
                    <p className="descricao">Bruno tem nove anos e não sabe nada sobre o Holocausto e a Solução Final contra os judeus. Também não faz idéia que seu país está em guerra com boa parte da Europa, e muito menos que sua família está envolvida no conflito.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={mundo}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">Mundo - Uma Introdução Para Crianças</h3>
                    <p className="descricao">O Mundo é muito grande, mas com este livro é fácil explorar cada canto de nosso planeta! Prepare-se para uma viagem incrível, na qual você vai visitar lugares distantes, conhecer pessoas interessantes e aprender sobre continentes, países, climas e muito mais.</p>
                </div>
            </div>
            <div className="caixas">
                    <img src={criancalivro}className="capas"/>
                <div className="textos">
                    <h3 className="Titulo">História do Mundo Para as Crianças</h3>
                    <p className="descricao">Dona Benta adora contar histórias de reis e rainhas, seres fantásticos e contos clássicos, mas desta vez ela vai contar uma história bastante comprida: a história do mundo!</p>
                </div>
            </div>
        </div>
	)
}

export default Livros