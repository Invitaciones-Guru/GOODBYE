// 1. ANIMACIONES
AOS.init({ duration: 1000, once: true });

// 2. CUENTA REGRESIVA
const targetDate = new Date("Jan 18, 2026 15:30:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    if (document.getElementById("days")) {
        document.getElementById("days").innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerHTML = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerHTML = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerHTML = Math.floor((diff % (1000 * 60)) / 1000);
    }
}, 1000);

// 3. MÚSICA (Lógica unificada)
const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');

// Función para dar Play y actualizar texto
function playMusic() {
    if (music.paused) {
        music.play().then(() => {
            musicText.innerHTML = "PAUSE MUSIC";
        }).catch(e => console.log("Error al reproducir"));
    }
}

// Autoplay al primer Click o Scroll
window.addEventListener('click', playMusic, { once: true });
window.addEventListener('scroll', playMusic, { once: true });

// Botón de Pausa/Play Manual
musicBtn.onclick = (e) => {
    e.stopPropagation(); // Evita que el click llegue a la ventana
    if (music.paused) {
        playMusic();
    } else {
        music.pause();
        musicText.innerHTML = "PLAY MUSIC";
    }
};

// 4. OTROS (RSVP, CLABE, MODAL)
function copyClabe() {
    navigator.clipboard.writeText("012345678901234567");
    alert("CLABE copiada ✅");
}

const rsvpForm = document.getElementById('rsvpForm');
if(rsvpForm) {
    rsvpForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('guestName').value;
        const choice = document.getElementById('attendance').value;
        const text = encodeURIComponent(`¡Hola! Soy ${name}. ${choice === "si" ? "Asistiré ✅" : "No asistiré ❌"}`);
        window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
    };
}

function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
