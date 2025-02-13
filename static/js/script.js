// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

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

// config
const settingsButton = document.querySelector('[data-bs-toggle="collapse"]');
const settingsCollapse = document.getElementById('settings');

settingsCollapse.addEventListener('show.bs.collapse', () => {
    settingsButton.textContent = "設定を閉じる";
});

settingsCollapse.addEventListener('hide.bs.collapse', () => {
    settingsButton.textContent = "設定を開く";
});

const volumeControl = document.getElementById('volume_control');
const overlapControl = document.getElementById('overlap_control');
const pitchControl = document.getElementById('pitch_control');

// config volume
document.getElementById('volume_control').addEventListener('input', () => {
    audioQuery.forEach((audio) => {
        audio.volume = volumeControl.value;
    });
});


// config pitch
document.getElementById('pitch_control').addEventListener('input', () => {
    audioQuery.forEach((audio) => {
        audio.playbackRate = pitchControl.value;
    });
});

// config reset
document.getElementById('reset_settings').addEventListener('click', () => {
    document.getElementById('volume_control').value = 1;
    document.getElementById('pitch_control').value = 1;
    document.getElementById('overlap_control').checked = true;

    const volumeControl = document.getElementById('volume_control');
    const pitchControl = document.getElementById('pitch_control');

    audioQuery.forEach((audio) => {
        audio.volume = volumeControl.value;
    });

    audioQuery.forEach((audio) => {
        audio.playbackRate = pitchControl.value;
    });
});

// stop sound
document.getElementById('stop_sound').addEventListener('click', () => {
    audioQuery.forEach((audio) => {
        audio.pause()
    });

    audioQuery = new Set()
});

// sound
let audioQuery = new Set();

const sounds = {
    tetos_death: 'static/sound/tetos-death.mp3',
    tetos_maziresu: 'static/sound/tetos-maziresu.mp3',
    tetos_oisii: 'static/sound/tetos-oisii.mp3',
    tetos_proposal: 'static/sound/tetos-proposal.mp3',
    tetos_urami: 'static/sound/tetos-urami.mp3',
    tetos_evol:'static/sound/tetos-evol.mp3',
    tetos_butigire: 'static/sound/tetos-butigire.mp3',
    tetos_pepepe: 'static/sound/tetos-pepepe.mp3',
    tetos_song: 'static/sound/tetos-song.mp3',
    tetos_uwaaa: 'static/sound/tetos-uwaaa.mp3',
    tetos_zii: 'static/sound/tetos-zii.wav',
    jeb_waaa: 'static/sound/jeb-waaa.mp3',
};


const audioInstances = {
    tetos_death: new Audio(sounds.tetos_death),
    tetos_maziresu: new Audio(sounds.tetos_maziresu),
    tetos_oisii: new Audio(sounds.tetos_oisii),
    tetos_proposal: new Audio(sounds.tetos_proposal),
    tetos_urami: new Audio(sounds.tetos_urami),
    tetos_evol: new Audio(sounds.tetos_evol),
    tetos_butigire: new Audio(sounds.tetos_butigire),
    tetos_pepepe: new Audio(sounds.tetos_pepepe),
    tetos_song: new Audio(sounds.tetos_song),
    tetos_uwaaa: new Audio(sounds.tetos_uwaaa),
    tetos_zii: new Audio(sounds.tetos_zii),
    jeb_waaa: new Audio(sounds.jeb_waaa),
};

function playSound(id) {

    if (overlapControl.checked) {
        const audio = new Audio(sounds[id]);
        audio.volume = volumeControl.value;
        audio.playbackRate = pitchControl.value;
        audio.play();
        audioQuery.add(audio)
    
        audio.addEventListener('ended', () => {
            audioQuery.delete(audio)
        });

    } else {
        const audio = audioInstances[id];
        audio.pause();
        audio.currentTime = 0;
        audio.volume = volumeControl.value;
        audio.playbackRate = pitchControl.value;
        audio.play();
        audioQuery.add(audio)

        audio.addEventListener('ended', () => {
            audioQuery.delete(audio)
        });
    }
}

// button click
Object.keys(sounds).forEach(id => {
    document.getElementById(id).addEventListener('click', () => playSound(id));
});