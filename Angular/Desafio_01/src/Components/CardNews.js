class CardNews extends HTMLElement {
    
    constructor(){  // Primeira coisa a ser executada
        super();    // Invoca o método construtor da classe herdada nesse caso é o do HTMLElment
        
        const shadow = this.attachShadow({mode: "open"});  // AttachShadow tem 2 modos: Closed - O mundo Exterior nao pode modificar.
        shadow.innerHTML = "<h1>Hello World!</h1>"
    }
}

customElements.define("card-news", CardNews);
