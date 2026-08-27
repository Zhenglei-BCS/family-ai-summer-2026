(() => {
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  const scoreEl = document.getElementById("score");
  const livesEl = document.getElementById("lives");
  const bestEl = document.getElementById("best");
  const btnStart = document.getElementById("btn-start");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  const W = canvas.width;
  const H = canvas.height;

  const BEST_KEY = "sky-catch-best";
  let best = Number(localStorage.getItem(BEST_KEY) || 0);
  bestEl.textContent = String(best);

  const player = {
    w: 56,
    h: 16,
    x: W / 2 - 28,
    y: H - 40,
    speed: 320,
  };

  let keys = { left: false, right: false };
  let items = [];
  let score = 0;
  let lives = 3;
  let running = false;
  let gameOver = false;
  let last = 0;
  let spawnTimer = 0;

  function reset() {
    items = [];
    score = 0;
    lives = 3;
    player.x = W / 2 - player.w / 2;
    spawnTimer = 0;
    gameOver = false;
    running = true;
    btnStart.textContent = "Pause";
    scoreEl.textContent = "0";
    livesEl.textContent = "3";
    last = performance.now();
    requestAnimationFrame(loop);
  }

  function spawn() {
    const good = Math.random() < 0.7;
    const size = good ? 14 + Math.random() * 10 : 16 + Math.random() * 12;
    items.push({
      x: size + Math.random() * (W - size * 2),
      y: -size,
      r: size / 2,
      vy: 90 + Math.random() * 80 + score * 2,
      good,
    });
  }

  function update(dt) {
    if (keys.left) player.x -= player.speed * dt;
    if (keys.right) player.x += player.speed * dt;
    player.x = Math.max(0, Math.min(W - player.w, player.x));

    spawnTimer -= dt;
    if (spawnTimer <= 0) {
      spawn();
      spawnTimer = Math.max(0.35, 1.1 - score * 0.02);
    }

    for (const it of items) {
      it.y += it.vy * dt;
    }

    // collisions
    const px = player.x;
    const py = player.y;
    const pw = player.w;
    const ph = player.h;

    items = items.filter((it) => {
      const hit =
        it.x > px &&
        it.x < px + pw &&
        it.y + it.r > py &&
        it.y - it.r < py + ph;

      if (hit) {
        if (it.good) {
          score += 1;
          scoreEl.textContent = String(score);
        } else {
          lives -= 1;
          livesEl.textContent = String(lives);
          if (lives <= 0) {
            endGame();
          }
        }
        return false;
      }
      // missed good orb past bottom — small penalty feel: just remove
      if (it.y - it.r > H) return false;
      return true;
    });
  }

  function endGame() {
    running = false;
    gameOver = true;
    btnStart.textContent = "Again";
    if (score > best) {
      best = score;
      localStorage.setItem(BEST_KEY, String(best));
      bestEl.textContent = String(best);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // starfield
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#1e293b";
    for (let i = 0; i < 40; i++) {
      const x = (i * 97) % W;
      const y = (i * 53 + score * 3) % H;
      ctx.fillRect(x, y, 2, 2);
    }

    // player
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "#7dd3fc";
    ctx.fillRect(player.x + 8, player.y - 6, player.w - 16, 6);

    // items
    for (const it of items) {
      ctx.beginPath();
      ctx.arc(it.x, it.y, it.r, 0, Math.PI * 2);
      if (it.good) {
        ctx.fillStyle = "#4ade80";
        ctx.fill();
      } else {
        ctx.fillStyle = "#fb7185";
        ctx.fill();
        // spike hint
        ctx.strokeStyle = "#fecaca";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    if (!running && !gameOver) {
      overlay("Press Start");
    }
    if (gameOver) {
      overlay(`Game over — score ${score}`);
    }
  }

  function overlay(text) {
    ctx.fillStyle = "rgba(2, 6, 23, 0.65)";
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 28px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(text, W / 2, H / 2);
  }

  function loop(now) {
    if (!running) {
      draw();
      return;
    }
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    update(dt);
    draw();
    if (running) requestAnimationFrame(loop);
  }

  // keyboard
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.left = true;
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.right = true;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      btnStart.click();
    }
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.left = false;
    if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.right = false;
  });

  // touch / buttons
  function hold(dir, on) {
    keys[dir] = on;
  }
  btnLeft.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    hold("left", true);
  });
  btnLeft.addEventListener("pointerup", () => hold("left", false));
  btnLeft.addEventListener("pointerleave", () => hold("left", false));
  btnRight.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    hold("right", true);
  });
  btnRight.addEventListener("pointerup", () => hold("right", false));
  btnRight.addEventListener("pointerleave", () => hold("right", false));

  btnStart.addEventListener("click", () => {
    if (gameOver || !running) {
      reset();
      return;
    }
    // pause
    running = false;
    btnStart.textContent = "Resume";
    draw();
  });

  draw();
})();
