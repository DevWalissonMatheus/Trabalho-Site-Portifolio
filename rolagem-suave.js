const menuBotoes = document.querySelectorAll('body a[href^="#"]');

menuBotoes.forEach((item) => {
  item.addEventListener("click", rolagemSuaveID);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function rolagemSuaveID(evento) {
  evento.preventDefault();
  const vai = getScrollTopByHref(evento.target);
  roleParaPosicao(vai);
}

function roleParaPosicao(vai) {
  roleScrollAte(0, vai, 1200);
}

function roleScrollAte(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutRolagem = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutRolagem(time, startX, distanceX, duration);
    const newY = easeInOutRolagem(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}
