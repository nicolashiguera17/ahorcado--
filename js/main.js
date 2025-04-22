let start = document.getElementById('title_div')
let words = ['amigos', 'felicidad', 'comida', 'señores', 'numeros', 'celular', 'profesor', 'aguacate', 'medellin', 'afganistan', 'hipopotamo', 'revolucionario', 'gritar', 'ventana', 'windows', 'linux', 'apple', 'android', 'naruto', 'zapato', 'deportivo', 'futbol', 'manzana', 'uva', 'solitario', 'hermitaño', 'puerta', 'locomotora', 'automovil', 'ambulancia', 'veneno', 'saludo', 'javascript', 'python', 'github', 'html', 'css', 'scrum', 'homosapiens', 'ñato', 'niños', 'niña', 'niñera', 'vivienda', 'apartamentos', 'cancion', 'microfono']
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let hiddenWord = selectedWord.split('').map(l => (l === ' ' ? ' ' : ''));
console.log('Palabra seleccionada: ${selectedWord}');