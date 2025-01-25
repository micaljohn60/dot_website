const ball = document.getElementById("ball");

const ballSize = 50;
let ballX = Math.floor(Math.random() * (window.innerWidth - ballSize));
let ballY = Math.floor(Math.random() * (window.innerHeight - ballSize)); // Initial Y position
let ballSpeedX = 8; // Speed in X direction
let ballSpeedY = 8; // Speed in Y direction

function animateBall() {
    const ballRect = ball.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Move the ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Bounce off the edges
    if (ballX + ballRect.width >= screenWidth || ballX <= 0) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballY + ballRect.height >= screenHeight || ballY <= 0) {
        ballSpeedY = -ballSpeedY;
    }

    // Update ball position
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";

    // Request next frame
    requestAnimationFrame(animateBall);
}

// Start the animation
animateBall();
