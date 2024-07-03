// Función de baraja o desordena un array que se pasa por parámetro
function shuffleArray(array) {
    let currentIndex = array.length;

    while (currentIndex !=0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}

export {shuffleArray};