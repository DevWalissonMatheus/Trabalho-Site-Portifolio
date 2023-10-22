const menuBotoes = document.querySelectorAll('body a[href^="#"]');
// Seleciona todos os links do body que são do tipo ID "#"
menuBotoes.forEach((item) => { // Verifica se os itens da lista foram clicados
  item.addEventListener("click", rolagemSuaveID); // Adiciona o evento de click
});                                               // e chama o evento que será ativado

function getScrollTopByHref(element) { // Função para pegar a posição do scroll
  const id = element.getAttribute("href"); // Pega a posição do href
  return document.querySelector(id).offsetTop; // Retorna a posição
}

function rolagemSuaveID(evento) { // Cria a função de rolagem
  evento.preventDefault(); // Quando clicar no botão não irá mostrar o nome do id
  const vai = getScrollTopByHref(evento.target) -45; // Leva para a posição do href com um espaçamento
  roleParaPosicao(vai); // Chama função para rolar    // de -45 para não ficar atrás da barra de rolagem
}

function roleParaPosicao(vai) { // Cria a função para a rolar
  roleScrollAte(0, vai, 1200);
  // Primeiro parâmetro -> Rolagem horizontal
  // Segundo parâmetro -> Rolagem vertical
  // Terceiro parâmetro -> Tempo que leva para rolar em ms
}

function roleScrollAte(endX, endY, duration) { // Função levar até a posição
  const startX = window.scrollX || window.pageXOffset; // Obtém a posição horizontal
  const startY = window.scrollY || window.pageYOffset; // horizontal e vertical
  const distanceX = endX - startX; // Calcula a distancia a ser percorrida
  const distanceY = endY - startY; // horizontalmente e verticalmente
  const startTime = new Date().getTime(); // Guarda o momento de inicio da animação de rolagem
  // Define uma duração para a animação, caso não seja especificada a duração padrão será 400 ms
  duration = typeof duration !== "undefined" ? duration : 400;

  const easeInOutRolagem = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) // Cria o efeito suavização com aceleração e desaceleração
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => { // Cria um temporizador para atualizar a posição
    const time = new Date().getTime() - startTime; // Define o temporizador
    const newX = easeInOutRolagem(time, startX, distanceX, duration); // Calcula as novas posições
    const newY = easeInOutRolagem(time, startY, distanceY, duration); // usando a função de suavização
    if (time >= duration) {
      clearInterval(timer); // Quando chega na posição o temporizador será limpo
    }
    window.scroll(newX, newY); // Atualiza a posição da parra de rolagem
  }, 1000 / 60); // Define um tempo padrão para atualizar a posição x e y
}
