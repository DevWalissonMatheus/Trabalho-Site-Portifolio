class MenuResponsivo {
  constructor(respMenu, navBotoes, navLinks) {
    this.respMenu = document.querySelector(respMenu);
    this.navBotoes = document.querySelector(navBotoes);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navBotoes.classList.toggle(this.activeClass);
    this.respMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.respMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.respMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const menuResponsivo = new MenuResponsivo(
  ".menu-responsivo",
  ".nav-botoes",
  ".nav-botoes li"
);
menuResponsivo.init();
