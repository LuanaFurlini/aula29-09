import { Produtos, lista_objetos } from "./Produtos";

class Cards extends HTMLElement{
    constructor(){
        super(); /* herança com html element */
        const shadow = this.attachShadow({mode: "open"});
        this.build(shadow);

        const style = document.createElement("link"); /* sempre colocar o link css no constructor */ 
        style.rel = "stylesheet";
        style.href = "./cards_style.css";

        shadow.append(style);
    }    

    build(shadow: ShadowRoot){
        lista_objetos.map((produto)=>{            /* função anonima */ 
            const div = document.createElement("div");
            div.className = "cards";

            const h1 = document.createElement("h1");
            const h3 = document.createElement("h3");

            const imagem = document.createElement('img'); /* adicionar imagem */
            imagem.src = "./img/tenis_nike.jpg";
            imagem.alt = "imagem tenis";

            h1.innerText = produto.getDesc();
            h3.innerText = produto.getPreco().toString();

            div.append(h1, imagem, h3); /* colar o h1 e o h3 dentro da div */ 
            shadow.append(div); 
        });
    }
}

customElements.define("meus-cards", Cards);