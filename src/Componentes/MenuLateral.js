import { Link } from "react-router-dom";
import Menu from "./menu";
import "../style.css"


function MenuLateral() {

      return (
            <div>
                  <nav class="menu-lateral">
                  <Menu/>

                        <ul>
                              <li class="menuItens">
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
                                    <a href="#sobre">
                                        <span class="icon"><i class="bi bi-info-square"></i></span>
                                        <span class="txt-link">Sobre</span>
                                    </a>
                              </li>
                        </ul>
                  </nav>
            </div>
      );
}

export default MenuLateral