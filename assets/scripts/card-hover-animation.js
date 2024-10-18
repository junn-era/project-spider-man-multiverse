function handleMouseEnter() {
  //console.log('handle mouse enter foi chamado', this)
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardsElements = document.getElementsByClassName('s-card');

  for (let index = 0; index < cardsElements.length; index++) {
    const card = cardsElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false);