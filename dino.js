const dinoElement = document.querySelector('[data-dino');

const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;

export function setupDino() {}

export function updateDino(delta, speedScale) {
	handleRun();
	handleJump();
}

function handleRun() {
	if (isJumping) {
		dinoElement.src = 'img/dino-stationary.png';
		return;
	}
}

function handleJump() {}
