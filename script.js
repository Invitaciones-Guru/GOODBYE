// 1. INICIALIZAR ANIMACIONES (Solo una vez)
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});


// 2. VARIABLES DE MÚSICA
const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');
let autoPlayDone = false; // Llave de seguridad

// Función para arrancar música desde Autoplay
const startAudio = () => {
    if (!autoPlayDone) {
        autoPlayDone = true;
        music.play().then(() => {
            musicText.innerHTML = "PAUSE MUSIC";
        }).catch(err => console.log("Esperando interacción..."));
        
        // Limpiamos los eventos para que no vuelvan a dispararse
        window.removeEventListener('click', startAudio);
        window.removeEventListener('scroll', startAudio);
    }
};

// Listeners para Autoplay (se ejecutan solo la primera vez)
window.addEventListener('click', startAudio);
window.addEventListener('scroll', startAudio);

// Lógica del Botón (Control Manual)
musicBtn.onclick = (e) => {
    e.stopPropagation(); // EVITA que el clic active el Autoplay de window
    autoPlayDone = true; // Si el usuario toca el botón primero, bloqueamos el Autoplay del scroll

    if (music.paused) {
        music.play();
        musicText.innerHTML = "PAUSE MUSIC";
    } else {
        music.pause();
        musicText.innerHTML = "PLAY MUSIC";
    }
};

// 3. CUENTA REGRESIVA
const targetDate = new Date("Jan 18, 2026 15:30:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerHTML = d;
        document.getElementById("hours").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;
    }
}, 1000); 

// 4. COPIAR CLABE
function copyClabe() {
    const clabe = "012345678901234567";
    navigator.clipboard.writeText(clabe);
    alert("CLABE copiada al portapapeles ✅");
}

// 5. RSVP WHATSAPP
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
    rsvpForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('guestName').value;
        const choice = document.getElementById('attendance').value;
        const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
        const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status}`);
        window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
    };
}

// 6. MODAL GALERÍA
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
