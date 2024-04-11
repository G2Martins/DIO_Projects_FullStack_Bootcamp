class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");    // Div Card
        componentRoot.setAttribute("class", "card");            // Setando o nome da classe do DIV CARD

        const cardLeft = document.createElement("div");         // Criando a div CARD LEFT
        cardLeft.setAttribute("class", "card__left");           // Setando o nome da classe da DIV CARD LEFT

        const autor = document.createElement("span");           // Criandos o elemento Span do CARD LEFT
        autor.textContent = "By " + (this.getAttribute("autor") ||  "Anonymous");  // Criando a prop que recupera o nome do autor do Span
        
        const linkTitle = document.createElement("a");          // Criandos o elemento a do CARD LEFT
        linkTitle.textContent = this.getAttribute("title");     // Criando a prop que recupera o titulo da Noticia
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");        // Criandos o elemento p do CARD LEFT
        newsContent.textContent = this.getAttribute("content")  // Criando a prop que recupera o conteudo da noticia


        cardLeft.appendChild(autor);                            // Relacionandos os elementos criados
        cardLeft.appendChild(linkTitle);                        // do Card Left
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");        // Criando a div CARD LEFT
        cardRight.setAttribute("class", "card__right");         // Setando o nome da classe da DIV CARD RIGHT
        
        
        const newsImage = document.createElement("img");        // Criando o elemento IMG do Card Right
        newsImage.src = (this.getAttribute("photo") || "assets/default-photo.jpg"); // Criando a prop que recupera a Imagem da Notícia
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);                       // Relacionandos os elementos criados do Card Left
                                                

        componentRoot.appendChild(cardLeft);                    // Relacionando dizendo que ambos são
        componentRoot.appendChild(cardRight);                   // Filhos da DIV Card, gerando uma conexao dos 2


        return componentRoot;
    }

    styles() {
      const style = document.createElement("style");
      style.textContent = `
      .card{
        width: 80%;
        box-shadow: 9px 9px 18px -4px rgba(0,0,0,0.75);
        -webkit-box-shadow: 9px 9px 18px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 9px 18px -4px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
  
      .card__left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
      }
      .card__left > span{
        font-weight: 400;
      }
    
      .card__left > a {
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
      }
    
      .card__left > p {
        color: rgb(71, 70, 70);
      }
      `;
  
      return style;
    }
}

customElements.define("card-news", CardNews);