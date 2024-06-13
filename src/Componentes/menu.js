
import React from 'react';

function Menu() {

    const expandir = () => {
        const menuSide = document.querySelector('.menu-lateral');
        menuSide.classList.toggle('expandir');
    };

return (
    <div class="botao-expandir">
            <i class="bi bi-list" id="btn-exp" onClick={expandir}></i>
    </div>
    );
}

export default Menu;