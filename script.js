document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const fecha = document.getElementById('fecha');

  fecha.textContent = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const canvas = document.getElementById('animalitos-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  class Cloud {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height * 0.5;
      this.radius = Math.random() * 50 + 50;
      this.speed = Math.random() * 0.5 + 0.2;
    }

    draw() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.arc(this.x + this.radius * 0.7, this.y - this.radius * 0.3, this.radius * 0.6, 0, Math.PI * 2);
      ctx.arc(this.x - this.radius * 0.7, this.y - this.radius * 0.3, this.radius * 0.6, 0, Math.PI * 2);
      ctx.fill();
    }

    update() {
      this.x += this.speed;
      if (this.x - this.radius > canvas.width) {
        this.x = -this.radius;
        this.y = Math.random() * canvas.height * 0.5;
      }
      this.draw();
    }
  }

  class Bird {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height * 0.7;
      this.size = Math.random() * 10 + 5;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 2 - 1;
      this.angle = 0;
    }

    draw() {
      ctx.fillStyle = '#555';
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - this.size, this.y + this.size * 0.5);
      ctx.lineTo(this.x - this.size, this.y - this.size * 0.5);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height * 0.7) this.speedY *= -1;
      this.angle += 0.05;
      this.y += Math.sin(this.angle) * 0.5;
      this.draw();
    }
  }

  const clouds = Array.from({ length: 10 }, () => new Cloud());
  const birds = Array.from({ length: 15 }, () => new Bird());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    clouds.forEach(cloud => cloud.update());
    birds.forEach(bird => bird.update());
    requestAnimationFrame(animate);
  }

  animate();
});
const datosCuriosos = [
  "🧠 El cerebro humano puede generar más ideas que átomos hay en el universo conocido.",
  "👶 El 90% del cerebro de un niño se desarrolla antes de los 5 años.",
  "🎨 Las emociones positivas activan más zonas del cerebro que las negativas.",
  "🛌 Dormir bien es esencial: durante el sueño se consolida lo que aprendimos.",
  "📚 El aprendizaje multisensorial activa más regiones cerebrales y mejora la memoria.",
  "💡 La curiosidad estimula la dopamina, lo que aumenta la motivación para aprender.",
  "👂 Escuchar música puede mejorar la concentración y el aprendizaje en niños.",
  "🤝 El juego y la interacción social son esenciales para el desarrollo cerebral infantil.",
  "🧩 La neuroplasticidad permite al cerebro adaptarse y aprender durante toda la vida.",
  "🌳 Estar en contacto con la naturaleza mejora la atención y reduce el estrés en niños.",
  "👁️‍🗨️ Ver imágenes coloridas y símbolos mejora la retención de información en edad temprana.",
  "💬 Hablar con los niños desde pequeños fortalece el desarrollo del lenguaje y el pensamiento.",
  "📖 Leer en voz alta a los niños activa más áreas cerebrales que simplemente ver una pantalla.",
  "🍎 Una buena alimentación favorece la atención y el aprendizaje."
];

const mostrarDato = document.getElementById("mostrarDato");
const popupDato = document.getElementById("popupDato");

mostrarDato.addEventListener("click", () => {
  const aleatorio = Math.floor(Math.random() * datosCuriosos.length);
  popupDato.textContent = datosCuriosos[aleatorio];
  popupDato.style.display = "block";
});
