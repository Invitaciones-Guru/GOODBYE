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

// --- CONTROL DE MÚSICA (AUTOPLAY AL SCROLL/CLICK + PAUSA) ---
const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');

// Función para arrancar la música
const startAudio = () => {
    music.play().then(() => {
        musicText.innerHTML = "PAUSE MUSIC";
    }).catch(err => console.log("Esperando interacción..."));
};

// Se activa al primer click O al primer scroll, pero SOLO UNA VEZ
window.addEventListener('click', startAudio, { once: true });
window.addEventListener('scroll', startAudio, { once: true });

// Lógica del botón (Pausa y Play manual)
musicBtn.onclick = (e) => {
    // IMPORTANTE: detiene que el click llegue a la ventana y active el startAudio otra vez
    e.stopPropagation(); 

    if (music.paused) {
        music.play();
        musicText.innerHTML = "PAUSE MUSIC";
    } else {
        music.pause();
        musicText.innerHTML = "PLAY MUSIC";
    }
};

// --- RESTO DE FUNCIONES (COUNTDOWN, COPIAR, MODAL) ---

// Inicializar AOS
AOS.init({ duration: 1000, once: true });

// Cuenta Regresiva
const targetDate = new Date("January 18, 2026 15:30:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const d = targetDate - now;
    if (document.getElementById("days")) {
        document.getElementById("days").innerText = Math.floor(d / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((d % (1000 * 60)) / 1000);
    }
}, 1000);

// Copiar CLABE
function copyClabe() {
    navigator.clipboard.writeText("0123 4567 8901 2345 67");
    alert("CLABE copiada al portapapeles");
}

// Modal Galería
function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
// --- CONTROL DE MÚSICA (AUTOPLAY AL SCROLL/CLICK + PAUSA) ---
const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');

// Función para arrancar la música
const startAudio = () => {
    music.play().then(() => {
        musicText.innerHTML = "PAUSE MUSIC";
    }).catch(err => console.log("Esperando interacción..."));
};

// Se activa al primer click O al primer scroll, pero SOLO UNA VEZ
window.addEventListener('click', startAudio, { once: true });
window.addEventListener('scroll', startAudio, { once: true });

// Lógica del botón (Pausa y Play manual)
musicBtn.onclick = (e) => {
    // IMPORTANTE: detiene que el click llegue a la ventana y active el startAudio otra vez
    e.stopPropagation(); 

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


