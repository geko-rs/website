const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const size = 40;
    ctx.strokeStyle = 'rgba(255,255,255,0.035)';
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    const glow = ctx.createRadialGradient(
        canvas.width / 2, -60, 0,
        canvas.width / 2, -60, 420
    );
    glow.addColorStop(0, 'rgba(1,155,99,0.13)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const fadeTop = ctx.createLinearGradient(0, 0, 0, 100);
    fadeTop.addColorStop(0, '#080808');
    fadeTop.addColorStop(1, 'transparent');
    ctx.fillStyle = fadeTop;
    ctx.fillRect(0, 0, canvas.width, 100);

    const fadeBot = ctx.createLinearGradient(0, canvas.height - 160, 0, canvas.height);
    fadeBot.addColorStop(0, 'transparent');
    fadeBot.addColorStop(1, '#080808');
    ctx.fillStyle = fadeBot;
    ctx.fillRect(0, canvas.height - 160, canvas.width, 160);
}

resize();
draw();
window.addEventListener('resize', () => { resize(); draw(); });
