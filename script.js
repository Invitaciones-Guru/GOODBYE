// AGREGADO: Inicializar animaciones
AOS.init({
    duration: 1000,
    once: true
});


// 1. CUENTA REGRESIVA
const targetDate = new Date("Jan 18, 2026 15:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
}, 1000);

// 2. MÚSICA
const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');

musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicText.innerHTML = "PAUSE MUSIC";
    } else {
        music.pause();
        musicText.innerHTML = "PLAY MUSIC";
    }
};

// 3. COPIAR CLABE
function copyClabe() {
    const clabe = "012345678901234567";
    navigator.clipboard.writeText(clabe);
    alert("CLABE copiada al portapapeles ✅");
}

// 4. RSVP WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const choice = document.getElementById('attendance').value;
    const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
    const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status}`);
    window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
};



const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');

let hasInteracted = false; // Esta es la clave

// Función para arrancar la música (Autoplay)
const startAudio = () => {
    if (!hasInteracted) {
        hasInteracted = true; // Bloqueamos futuros intentos de autoplay
        music.play().then(() => {
            musicText.innerHTML = "PAUSE MUSIC";
        }).catch(err => console.log("Interacción requerida"));
        
        // Limpiamos los eventos de la ventana de inmediato
        window.removeEventListener('click', startAudio);
        window.removeEventListener('scroll', startAudio);
    }
};

// Listeners para el Autoplay (Solo la primera vez)
window.addEventListener('click', startAudio);
window.addEventListener('scroll', startAudio);

// Lógica del Botón (Control Manual Total)
musicBtn.onclick = (e) => {
    e.stopPropagation(); // Evita que el click active el startAudio
    hasInteracted = true; // Si el usuario toca el botón primero, bloqueamos el autoplay del scroll

    if (music.paused) {
        music.play();
        musicText.innerHTML = "PAUSE MUSIC";
    } else {
        music.pause();
        musicText.innerHTML = "PLAY MUSIC";
    }
};







function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}




AOS.init({
    once: true, // La animación solo sucede una vez al bajar
    mirror: false
});


