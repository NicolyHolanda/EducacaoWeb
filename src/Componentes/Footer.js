function Footer() {
	return(
		<div>
            <footer >
                <div class="main-content">
                    <div class="left box">
                        <h2 id="sobre">Sobre nós</h2>
                        <div class="content">
                        <p>Nosso site busca trazer benefícios para<br/> a educação, utilizando a tecnologia como<br/> um importante meio para prover ferramentas<br/> de qualidade para um bom aprendizado.</p>
                        </div>
                        
                    </div>
                    <div class="center box">
                        <h2>Contato</h2>
                            <div class="content">
                                <div class="contact">
                                    <span class="bi bi-telephone"></span>
                                    <span class="text">(55) 1234-5678</span>
                                </div>
                                <div class="contact">
                                    <span class="bi bi-whatsapp"></span>
                                    <span class="text">(55)11 9999-9999</span>
                                </div>
                            </div>
                    </div>
                    <div class="rigth box">
                        <div class="social-content">
                            <h2>Siga nossas redes</h2>
                            <a href="#"><span class="bi bi-facebook" style={{color: "white"}}></span></a>
                            <a href="#"><span class="bi bi-instagram" style={{color: "white"}}></span></a>
                        </div>
                    </div>
                </div>          
            </footer>
		</div>
	)
}

export default Footer