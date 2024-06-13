import "../style.css"
import "../Assets/logo.webp"
import logo from "../Assets/logo.webp"


function Header() {
	return(
        <div class="cabecalho">
            <header>
                <div id="marca">
                    <img id="logo" src={logo}/>
                    <h3>EducaWeb</h3>
                </div>
                <input id="pesquisa" type="text"/>
            </header>
        </div>
	)
}

export default Header