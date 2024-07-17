      // Función para la navegación de las tarjetas
      let currentCard = 0;
      const cards = document.querySelectorAll('.card');

      function navigateCard(direction) {
        cards[currentCard].style.display = 'none'; // Oculta la tarjeta actual
        currentCard = (currentCard + direction + cards.length) % cards.length; // Calcula el índice de la tarjeta siguiente o anterior
        cards[currentCard].style.display = 'block'; // Muestra la nueva tarjeta
      }

      // Inicializa la vista mostrando solo la primera tarjeta
      cards.forEach((card, index) => {
        card.style.display = index === 0 ? 'block' : 'none';
      });