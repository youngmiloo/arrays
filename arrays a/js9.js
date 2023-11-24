// exercise 9

function shuffle(array) {
    let currentIndex = array.length;
  
    while (currentIndex !== 0) {
      // Generate a random index between 0 and currentIndex
      const randomIndex = Math.floor(Math.random() * currentIndex);
  
      // Swap elements at randomIndex and currentIndex - 1
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }  