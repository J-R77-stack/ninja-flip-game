class AudioController {
    constructor() {
        this.backingMusic = new Audio('assets/audio/background.mp3');
        this.flipSound = new Audio('assets/audio/flip.wav');
        this.matchSound = new Audio('assets/audio/match.mp3');
        this.winnerSound = new Audio('assets/audio/winner.mp3');
        this.gameoverSound = new Audio('assets/audio/game_over.mp3');
        this.backingMusic.volume = 0.5;
        this.backingMusic.loop = true;
    }
    startMusic() {
        this.backingMusic.play();
    }
    stopMusic() {
        this.backingMusic.pause();
        this.backingMusic.currentTime = 0;
    }
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startGame();
            let audioController = new AudioController();
audioController.startMusic();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentloaded', ready());
} else {
    ready();
}

