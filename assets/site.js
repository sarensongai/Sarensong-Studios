(function () {
  // Hero: an island rising as a ridgeline out of a sea of waveforms.
  var canvas = document.querySelector('.hero-canvas');
  var hero = document.querySelector('.hero');
  if (!canvas || !hero || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var styles = getComputedStyle(document.documentElement);
  function token(name, fallback) { return styles.getPropertyValue(name).trim() || fallback; }
  function rgb(hex) {
    var h = hex.replace('#', '');
    if (h.length === 3) h = h.replace(/./g, '$&$&');
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  var ABYSS = token('--abyss', '#07111A');
  var SEA = rgb(token('--seaglass', '#5ED6C9'));
  var EMBER = rgb(token('--ember', '#FF9F57'));
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var W = 0, H = 0, raf = 0, running = false, onScreen = true, t0 = performance.now();
  var pts = new Float32Array(0);

  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a.toFixed(3) + ')'; }
  function mix(a, b, k) { return [Math.round(a[0] + (b[0] - a[0]) * k), Math.round(a[1] + (b[1] - a[1]) * k), Math.round(a[2] + (b[2] - a[2]) * k)]; }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function easeOut(v) { return 1 - Math.pow(1 - v, 3); }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = Math.max(1, Math.round(W * dpr));
    canvas.height = Math.max(1, Math.round(H * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    pts = new Float32Array(Math.ceil((W + 40) / 4) + 2);
  }

  function layout() {
    if (W < 760) {
      return { cx: W * 0.52, top: H * 0.56, rows: 30, rowC: 0.42, sx: Math.max(70, W * 0.2), peak: Math.min(H * 0.18, 160) };
    }
    return { cx: W * 0.7, top: H * 0.24, rows: 46, rowC: 0.42, sx: Math.min(W * 0.13, 230), peak: H * 0.3 };
  }

  function draw(t) {
    var L = layout();
    var rise = reduce.matches ? 1 : easeOut(clamp01((t - 200) / 2600));
    var bottom = H + 8;
    var gap = (bottom - L.top) / (L.rows - 1);
    var summitX = L.cx, summitY = Infinity;
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < L.rows; i++) {
      var depth = i / (L.rows - 1);
      var base = L.top + i * gap;
      var dr = depth - L.rowC;
      var mass = Math.exp(-(dr * dr) / (2 * 0.12 * 0.12));
      var amp = 1.5 + depth * 6.5;
      var n = 0;
      for (var x = -12; x <= W + 12; x += 4) {
        var dx = (x - L.cx) / L.sx;
        var wave = Math.sin(x * 0.011 + t * 0.0008 + i * 0.55) * 0.6 + Math.sin(x * 0.026 - t * 0.0012 + i * 1.3) * 0.4;
        var mound = Math.exp(-dx * dx * 0.55) * (0.78 + 0.22 * Math.sin(dx * 2.9 + i * 0.8));
        var spire = Math.exp(-dx * dx * 5) * 0.6;
        var shoulder = Math.exp(-(dx + 1.15) * (dx + 1.15) * 1.6) * 0.3;
        var land = (mound * 0.68 + spire + shoulder) * mass * L.peak * rise;
        var calm = 1 - clamp01(land / (L.peak * 0.18 + 1));
        var y = base - land - wave * amp * calm;
        pts[n++] = y;
        if (land > L.peak * 0.3 && y < summitY) { summitY = y; summitX = x; }
      }

      // Occlude the rows behind, then draw this row's line.
      ctx.beginPath();
      ctx.moveTo(-12, pts[0]);
      for (var k = 1, xx = -8; k < n; k++, xx += 4) ctx.lineTo(xx, pts[k]);
      ctx.lineTo(W + 12, H + 12);
      ctx.lineTo(-12, H + 12);
      ctx.closePath();
      ctx.fillStyle = ABYSS;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(-12, pts[0]);
      for (k = 1, xx = -8; k < n; k++, xx += 4) ctx.lineTo(xx, pts[k]);
      var a = 0.12 + depth * 0.42;
      var warm = clamp01(mass * rise * 0.95);
      var g = ctx.createLinearGradient(0, 0, W, 0);
      var left = clamp01((L.cx - L.sx * 1.8) / W), mid = clamp01(L.cx / W), right = clamp01((L.cx + L.sx * 1.8) / W);
      g.addColorStop(0, rgba(SEA, a * 0.55));
      g.addColorStop(left, rgba(SEA, a));
      g.addColorStop(mid, rgba(mix(SEA, EMBER, warm), Math.min(1, a * (1 + warm * 0.9))));
      g.addColorStop(right, rgba(SEA, a));
      g.addColorStop(1, rgba(SEA, a * 0.55));
      ctx.strokeStyle = g;
      ctx.lineWidth = 0.8 + depth * 0.7;
      ctx.stroke();
    }

    // The forge light at the summit.
    if (rise > 0.05 && isFinite(summitY)) {
      var flicker = reduce.matches ? 1 : 0.85 + 0.15 * Math.sin(t * 0.003);
      var r = 46 * (W < 760 ? 0.75 : 1);
      var glow = ctx.createRadialGradient(summitX, summitY + 6, 0, summitX, summitY + 6, r);
      glow.addColorStop(0, rgba(EMBER, 0.5 * rise * flicker));
      glow.addColorStop(1, rgba(EMBER, 0));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(summitX, summitY + 6, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = rgba(EMBER, rise);
      ctx.beginPath();
      ctx.arc(summitX, summitY + 1, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function frame(now) {
    draw(now - t0);
    raf = requestAnimationFrame(frame);
  }
  function start() {
    if (running || reduce.matches || !onScreen || document.hidden) return;
    running = true;
    raf = requestAnimationFrame(frame);
  }
  function stop() { running = false; cancelAnimationFrame(raf); }
  function still() { draw(reduce.matches ? 0 : performance.now() - t0); }

  resize();
  still();
  start();

  window.addEventListener('resize', function () { resize(); still(); });
  document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
  if (reduce.addEventListener) reduce.addEventListener('change', function () { stop(); still(); start(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      if (onScreen) start(); else stop();
    }).observe(hero);
  }
})();

(function () {
  // Copy buttons: <button data-copy="element-id">. Falls back to selecting the text.
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute('data-copy'));
    if (!target) return;
    var idle = btn.textContent, timer = 0;
    function settle(label) {
      btn.textContent = label;
      clearTimeout(timer);
      timer = setTimeout(function () { btn.textContent = idle; }, 1800);
    }
    function selectText() {
      var range = document.createRange();
      range.selectNodeContents(target);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      settle('Selected');
    }
    btn.addEventListener('click', function () {
      var text = target.innerText.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { settle('Copied'); }, selectText);
      } else {
        selectText();
      }
    });
  });
})();
