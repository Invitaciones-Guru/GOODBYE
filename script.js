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

document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('weddingMusic');
    const musicBtn = document.getElementById('musicBtn');
    const musicText = document.getElementById('musicText');

    // Función para iniciar la música
    function startMusic() {
        if (music.paused) {
            music.play().then(() => {
                musicText.innerText = "PAUSE MUSIC";
                // Una vez que arranca, eliminamos el evento de scroll para que no interfiera más
                window.removeEventListener('scroll', startMusic);
                window.removeEventListener('touchstart', startMusic);
                window.removeEventListener('click', startMusic);
            }).catch(error => {
                console.log("Autoplay bloqueado hasta interacción física.");
            });
        }
    }

    // Escuchar scroll o toques para activar el sonido
    window.addEventListener('scroll', startMusic);
    window.addEventListener('touchstart', startMusic); // Para toques rápidos en celular
    window.addEventListener('click', startMusic);

    // Lógica del botón: PAUSA y PLAY manual
    musicBtn.addEventListener('click', (e) => {
        // Evitamos que el clic en el botón active las funciones de scroll
        e.stopPropagation();
        
        if (music.paused) {
            music.play();
            musicText.innerText = "PAUSE MUSIC";
        } else {
            music.pause();
            musicText.innerText = "PLAY MUSIC";
        }
    });
});





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


