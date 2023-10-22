class MenuResponsivo {
  constructor(respMenu, navBotoes, navLinks) {
    this.respMenu = document.querySelector(respMenu); // Faz referencia ao seletor menu
    this.navBotoes = document.querySelector(navBotoes); // Faz referencia aos seletores dos botões
    this.navLinks = document.querySelectorAll(navLinks); // Faz referencia aos seletores de links
    this.activeClass = "active"; // Faz referencia a classe active

    this.handleClick = this.handleClick.bind(this); // Evita erro sobre não encontrar os links
  }

  animacaoLinks() { // Função para ativar a barra lateral
    this.navLinks.forEach((link, index) => { // Seleciona cada link de forma individual
      link.style.animation // Verifica se os links possuem alguma animação
        ? (link.style.animation = "") // Se existir continua normal
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3 // Se não existir adiciona uma animação
          }s`);
    });
  }

  handleClick() { // Deixa o botão da barra lateral funcional
    this.navBotoes.classList.toggle(this.activeClass); // Faz referencia a barra lateral
    this.respMenu.classList.toggle(this.activeClass); // Faz referencial a animação dos botão
    this.animacaoLinks(); // Faz referencia a animação dos botões
  }

  addClickEvent() {
    this.respMenu.addEventListener("click", this.handleClick); // Cria o evento de click no menu
                                                              // e chama o evento que será ativado
  }

  init() { // Inicia a função
    if (this.respMenu) {
      this.addClickEvent(); // Se o menu existir
    }
    return this; // Retorna this
  }
}

const menuResponsivo = new MenuResponsivo( // Variável que utiliza os seletores
  ".menu-responsivo",
  ".nav-botoes",
  ".nav-botoes li"
);
menuResponsivo.init(); // Inicia o menu
