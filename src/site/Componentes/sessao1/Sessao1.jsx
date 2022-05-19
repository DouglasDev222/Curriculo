import React from "react";
import "./sessao1.css"

function Sessao1() {
    return <section id="sessao1">
    <div className="container-fluid">
        <div className="row">
            <div id="div1" className="col-lg-4">
                <img id="imgperfil"src="..\imagens\WhatsApp Image 2022-05-11 at 15.38.00.jpeg" alt=""/>
            </div>
            <div id="div2" className="col-lg-4">
                <h4 id="santos">  Santos</h4>
                <h1 id="douglas">DOUGLAS</h1>
                <h4 id="deve">Desenvolvedor Web Junior</h4>
            </div>
            <div id="div2" className="col-lg-4">
                <h4 id="santos">  Redes sociais</h4>
            </div>
        </div>
    </div>
</section>
}

export default Sessao1