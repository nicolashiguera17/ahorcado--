let start = document.getElementById('title_div')
let words = ['amigos', 'felicidad', 'comida', 'señores', 'numeros', 'celular', 'profesor', 'aguacate', 'medellin', 'afganistan', 'hipopotamo', 'revolucionario', 'gritar', 'ventana', 'windows', 'linux', 'apple', 'android', 'compumax', 'zapato', 'deportivo', 'futbol', 'manzana', 'uva', 'solitario', 'dubai', 'puerta', 'locomotora', 'automovil', 'ambulancia', 'venecia', 'silencio', 'javascript', 'python', 'github', 'html', 'css', 'scrum', 'hambre', 'ñato', 'niños', 'niña', 'niñera', 'vivienda', 'apartamentos', 'cancion', 'microfono']
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let hiddenWord = selectedWord.split('').map(l => (l === ' ' ? ' ' : ''));
console.log(`Palabra seleccionada: ${selectedWord}`);

let count = 0

document.querySelectorAll('.list-abc button').forEach(button => {
    button.addEventListener('click', (event) => {
    event.preventDefault()
    let letra = button.textContent;
    button.disabled = true;
    button.style.opacity = '0.5';
    button.style.background = 'beige'
    console.log(`Letra presionada: '${letra}'`);

    let correct = false

    for(let i=0; i < selectedWord.length; i++) {
        if (selectedWord[i] == letra) {
            hiddenWord[i] = letra
            correct = true
        }
    }
    let fullWord = document.getElementById('word');
    fullWord.innerHTML = hiddenWord.join(' ');

    if (!correct) {
        alert('NO era esa ,prueba con otra')
        count++
        console.log(count);

    }
    if (!hiddenWord.includes('_')) {
        alert('Muy bien,felicitaciones,lo lograste !!')
        let title = document.getElementById('welcome')
        title.textContent = 'Reiniciando...';
        title.style.color = 'white'

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    if (count === 8) {
        alert(`¡Perdiste! La palabra era: ${selectedWord}`);
        let title = document.getElementById('welcome')
        title.textContent = 'Reiniciando...';
        title.style.color = 'white'

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    });
});