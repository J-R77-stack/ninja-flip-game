class AudioController {
    constructor() {
        this.backingMusic = new Audio('assets/audio/background.mp3');
        this.flipSound = new Audio('assets/audio/flip.wav');
        this.matchSound = new Audio('assets/audio/match.mp3');
        this.winnerSound = new Audio('assets/audio/winner.mp3');
        this.gameOverSound = new Audio('assets/audio/game_over.mp3');
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
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    winner() {
        this.stopMusic();
        this.winnerSound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class NinjaFlip {
    constructor(totalTime, cards){
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.flipper = document.getElementById('flips');
        this.audioController = new AudioController();
    }
   
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startGame();
           
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

