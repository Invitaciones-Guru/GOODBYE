// 1. INICIALIZAR ANIMACIONES
AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

// 2. CUENTA REGRESIVA
const targetDate = new Date("Jan 18, 2026 15:30:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if(document.getElementById("days")){
        document.getElementById("days").innerHTML = d;
        document.getElementById("hours").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;
    }
}, 1000);

// 3. MÚSICA (CORREGIDA)
const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicBtn');
const musicText = document.getElementById('musicText');

// Esta función se encarga de que el texto siempre coincida con el estado del audio
const updateBtnText = () => {
    musicText.innerHTML = music.paused ? "PLAY MUSIC" : "PAUSE MUSIC";
};

musicBtn.onclick = (e) => {
    e.stopPropagation(); // ¡ESTO ES LO QUE FALTA! Evita que el click reactive el autoplay
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    updateBtnText();
};

// Intento de Autoplay (Mejorado)
const handleAutoplay = () => {
    if (music.paused) {
        music.play().then(() => {
            updateBtnText();
        }).catch(err => console.log("Esperando interacción..."));
    }
};

window.addEventListener('click', handleAutoplay, { once: true });
window.addEventListener('scroll', handleAutoplay, { once: true });

// 4. COPIAR CLABE
function copyClabe() {
    const clabe = "012345678901234567";
    navigator.clipboard.writeText(clabe);
    alert("CLABE copiada al portapapeles ✅");
}

// 5. RSVP WHATSAPP
const rsvpForm = document.getElementById('rsvpForm');
if(rsvpForm){
    rsvpForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('guestName').value;
        const choice = document.getElementById('attendance').value;
        const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
        const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status}`);
        window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
    };
}

// 6. MODAL
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
