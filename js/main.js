let start = document.getElementById('title__div')
let words = ['cosmonauta', 'universo', 'dinosaurio', 'quimica', 'genoma', 'ciencias', 'inteligencia', 'neuronas', 'buitre', 'tornado', 'relámpago', 'espejismo', 'aurora', 'planeta', 'galaxia', 'alquimia', 'sincrotrón', 'supernova', 'biónico', 'biología', 'ciberespacio', 'holograma', 'atomo', 'microscopio', 'volcan', 'explosión', 'incendio', 'neblina', 'tiburón', 'octopus', 'quasar', 'robotica', 'ciborg', 'código', 'algoritmo', 'dado', 'tablero', 'cristal', 'tintura', 'paleta', 'cuadro', 'boceto', 'galería', 'vanguardista', 'creador', 'pintura', 'expresión', 'bailar', 'hip-hop', 'concierto', 'saxofón', 'guitarra', 'melodía', 'sonido', 'frecuencia', 'sinfonía', 'orquesta', 'flamenco', 'opera', 'sitar', 'tarot', 'astrología', 'mística', 'meditación', 'magi', 'hechizo', 'futuro', 'tiempo', 'cuántico', 'física', 'espectro', 'dimensiones', 'efecto mariposa', 'fractal', 'alcalino', 'cristalización', 'análisis', 'fórmula', 'interacción', 'serpiente', 'quimera', 'bestiario', 'dragón', 'hombre lobo', 'pirámide', 'antártida', 'túnel', 'desierto', 'sendero', 'misterio', 'espectáculo', 'irreal', 'sombra', 'noche', 'luz', 'reflejo', 'luminiscencia', 'helicóptero', 'transbordador', 'tierra', 'fuerza', 'músculo', 'viento', 'mar', 'lluvia', 'nevada', 'tormenta', 'serpiente', 'incognito', 'misterioso', 'unicornio']
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let hiddenWord = selectedWord.split('').map(l => (l === ' ' ? ' ' : '_'));
console.log(`Palabra seleccionada: ${selectedWord}`);

start.innerHTML = `
<h1 id="welcome"> DESAFIA TU MENTE </h1>
<h2 id="word">${hiddenWord.join(' ')}</h2>
<ul class= "list-abc">
<button>a</button>
<button>b</button>
<button>c</button>
<button>d</button>
<button>e</button>
<button>f</button>
<button>g</button>
<button>h</button>
<button>i</button>
<button>j</button>
<button>k</button>
<button>l</button>
<button>m</button>
<button>n</button>
<button>ñ</button>
<button>o</button>
<button>p</button>
<button>q</button>
<button>r</button>
<button>s</button>
<button>t</button>
<button>u</button>
<button>v</button>
<button>w</button>
<button>x</button>
<button>y</button>
<button>z</button>
</ul>
`
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
        alert('¡Esa no es,prueba con otra !')
        count++
        console.log(count);
        
    }
    if (!hiddenWord.includes('_')) {
        alert('Muy bien,eres un crack!')
        let title = document.getElementById('welcome')
        title.textContent = 'Reiniciando...';
        title.style.color = 'white'

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    if (count === 8) {
        alert(`No fuiste lo suficientemente bueno a la proxima,y la palabra era : ${selectedWord}`);
        let title = document.getElementById('welcome')
        title.textContent = 'Reiniciando...';
        title.style.color = 'white'

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    });
});