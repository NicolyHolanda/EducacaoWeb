import { Link } from "react-router-dom";
import "../style.css"

function MenuLateral() {

      return (
            <div>
                  <nav class="menu-lateral">

                        <div class="botao-expandir">
                              <i class="bi bi-list" id="btn-exp"></i>
                        </div>

                        <ul>
                              <li class="menuItens ativo">
                                    <Link to="/">
                                        <span class="icon"><i class="bi bi-houses"></i></span>
                                        <span class="txt-link">Home</span>
                                    </Link>
                              </li>
                              <li class="menuItens">
                                    <Link to="/artigos">
                                        <span class="icon"><i class="bi bi-columns-gap"></i></span>
                                        <span class="txt-link">Artigos</span>
                                    </Link>
                              </li>
                              <li class="menuItens">
                                    <Link to="/dicas">
                                        <span class="icon"><i class="bi bi-lightbulb"></i></span>
                                        <span class="txt-link">Dicas</span>
                                    </Link>
                              </li>
                              <li class="menuItens">
                                    <a href="#">
                                        <span class="icon"><i class="bi bi-info-square"></i></span>
                                        <span class="txt-link">Sobre</span>
                                    </a>
                              </li>
                              <li class="menuItens">
                                    <a href="#">
                                        <span class="icon"><i class="bi bi-chat-right-text"></i></span>
                                        <span class="txt-link">Contato</span>
                                    </a>
                              </li>
                        </ul>
                  </nav>
            </div>
      );
}

export default MenuLateral