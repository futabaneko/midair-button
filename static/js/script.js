// fadein
window.addEventListener('load', function() {
    const fadeInElements = document.querySelectorAll('.fadein');
    
    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 100);
    });
});

// click
document.querySelectorAll('.fadein').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        ripple.className = 'ripple';

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// sound
const audio_tetos_death = new Audio('static/sound/tetos-death.mp3');
const audio_tetos_maziresu = new Audio('static/sound/tetos-maziresu.mp3');
const audio_tetos_oisii = new Audio('static/sound/tetos-oisii.mp3');
const audio_tetos_proposal = new Audio('static/sound/tetos-proposal.mp3');
const audio_tetos_urami = new Audio('static/sound/tetos-urami.mp3');
const audio_tetos_evol = new Audio('static/sound/tetos-evol.mp3');

// death
document.getElementById('tetos_death').addEventListener('click', () => {
    audio_tetos_death.currentTime = 0;
    audio_tetos_death.play();
});

// maziresu
document.getElementById('tetos_maziresu').addEventListener('click', () => {
    audio_tetos_maziresu.currentTime = 0;
    audio_tetos_maziresu.play();
});

// oisii
document.getElementById('tetos_oisii').addEventListener('click', () => {
    audio_tetos_oisii.currentTime = 0;
    audio_tetos_oisii.play();
});

// proposal
document.getElementById('tetos_proposal').addEventListener('click', () => {
    audio_tetos_proposal.currentTime = 0;
    audio_tetos_proposal.play();
});

// urami
document.getElementById('tetos_urami').addEventListener('click', () => {
    audio_tetos_urami.currentTime = 0;
    audio_tetos_urami.play();
});

// evol
document.getElementById('tetos_evol').addEventListener('click', () => {
    audio_tetos_evol.currentTime = 0;
    audio_tetos_evol.play();
});