(function () {
  const root = document.getElementById("escuta");
  if (!root) return;

  const audioUrl = root.getAttribute("data-audio");
  const dataUrl = root.getAttribute("data-json");
  const shareUrl = root.getAttribute("data-share") || window.location.href;

  const fmt = (s) => {
    if (!Number.isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + String(sec).padStart(2, "0");
  };

  const cueAt = (cues, t) => {
    let ans = 0;
    for (let i = 0; i < cues.length; i++) {
      if (cues[i].t <= t) ans = i;
    }
    return ans;
  };

  const chapterAt = (chapters, t) => {
    let ans = 0;
    for (let i = 0; i < chapters.length; i++) {
      if (chapters[i].t <= t) ans = i;
    }
    return ans;
  };

  fetch(dataUrl)
    .then((r) => r.json())
    .then((data) => boot(data))
    .catch(() => {
      root.querySelector("[data-slot=error]").hidden = false;
    });

  function boot(data) {
    const audio = root.querySelector("audio");
    const playBtn = root.querySelector("[data-action=play]");
    const playLabel = root.querySelector("[data-slot=play-label]");
    const barPlay = root.querySelector("[data-action=bar-play]");
    const barPlayIcon = root.querySelector("[data-slot=bar-play-icon]");
    const seek = root.querySelector("[data-action=seek]");
    const now = root.querySelector("[data-slot=now]");
    const dur = root.querySelector("[data-slot=dur]");
    const caption = root.querySelector("[data-slot=caption]");
    const chapterLabel = root.querySelector("[data-slot=chapter]");
    const voice = root.querySelector("[data-slot=voice]");
    const cuesEl = root.querySelector("[data-slot=cues]");
    const chaptersEl = root.querySelector("[data-slot=chapters]");
    const questionsEl = root.querySelector("[data-slot=questions]");
    const afterEl = root.querySelector("[data-panel=depois]");
    const tabBtns = root.querySelectorAll("[data-tab]");

    let playing = false;
    audio.src = audioUrl;

    chaptersEl.innerHTML = data.chapters
      .map(
        (ch, i) =>
          `<button type="button" class="escuta-ch" data-t="${ch.t}" data-i="${i}">
            <span>${ch.title}</span>
            <span class="escuta-t">${fmt(ch.t)}</span>
          </button>`
      )
      .join("");

    cuesEl.innerHTML = data.cues
      .map(
        (cue, i) =>
          `<button type="button" class="escuta-cue" data-t="${cue.t}" data-i="${i}">
            <span class="escuta-t">${fmt(cue.t)}</span>
            <span>${cue.text}</span>
          </button>`
      )
      .join("");

    questionsEl.innerHTML = data.questions
      .map(
        (q, i) =>
          `<li class="escuta-q"><span>${String(i + 1).padStart(2, "0")}</span><p>${q}</p></li>`
      )
      .join("");

    const cueNodes = [...cuesEl.querySelectorAll(".escuta-cue")];
    const chNodes = [...chaptersEl.querySelectorAll(".escuta-ch")];

    function paint(t) {
      const ci = cueAt(data.cues, t);
      const hi = chapterAt(data.chapters, t);
      const cue = data.cues[ci];
      const ch = data.chapters[hi];
      caption.textContent = cue ? cue.text : "";
      chapterLabel.textContent = ch ? ch.title : "";
      voice.textContent = cue && cue.speaker === "b" ? "Voz 2" : "Voz 1";
      cueNodes.forEach((n, i) => n.classList.toggle("is-on", i === ci));
      chNodes.forEach((n, i) => n.classList.toggle("is-on", i === hi));
      const on = cueNodes[ci];
      if (on) on.scrollIntoView({ block: "nearest" });
      now.textContent = fmt(t);
      const d = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : data.duration;
      dur.textContent = fmt(d);
      seek.max = d;
      seek.value = t;
      const p = d > 0 ? (t / d) * 100 : 0;
      seek.style.background =
        "linear-gradient(to right, #d4af6a " + p + "%, #2a2a2a " + p + "%)";
    }

    function setPlaying(v) {
      playing = v;
      playLabel.textContent = v ? "Pausar" : "Ouvir";
      barPlay.setAttribute("aria-label", v ? "Pausar" : "Ouvir");
      barPlayIcon.innerHTML = v
        ? '<rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/>'
        : '<path d="M8 5v14l11-7z"/>';
    }

    async function toggle() {
      try {
        if (audio.paused) {
          await audio.play();
        } else {
          audio.pause();
        }
      } catch (e) {
        root.querySelector("[data-slot=error]").hidden = false;
      }
    }

    playBtn.addEventListener("click", toggle);
    barPlay.addEventListener("click", toggle);
    audio.addEventListener("play", () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("timeupdate", () => paint(audio.currentTime));
    audio.addEventListener("loadedmetadata", () => paint(audio.currentTime));
    audio.addEventListener("ended", () => {
      setPlaying(false);
      tabBtns.forEach((b) => {
        const on = b.getAttribute("data-tab") === "depois";
        b.classList.toggle("is-on", on);
      });
      root.querySelector("[data-panel=texto]").hidden = true;
      afterEl.hidden = false;
    });

    seek.addEventListener("input", () => {
      audio.currentTime = Number(seek.value);
      paint(audio.currentTime);
    });

    root.querySelector("[data-action=back]").addEventListener("click", () => {
      audio.currentTime = Math.max(0, audio.currentTime - 15);
    });
    root.querySelector("[data-action=fwd]").addEventListener("click", () => {
      audio.currentTime = audio.currentTime + 15;
    });
    root.querySelector("[data-action=share]").addEventListener("click", async () => {
      const text = "Ouça: " + data.episode.title + " — " + data.episode.subtitle;
      if (navigator.share) {
        try {
          await navigator.share({ title: data.episode.title, text, url: shareUrl });
          return;
        } catch (e) {}
      }
      window.open(
        "https://api.whatsapp.com/send?text=" + encodeURIComponent(text + " " + shareUrl),
        "_blank",
        "noopener,noreferrer"
      );
    });

    cuesEl.addEventListener("click", (e) => {
      const b = e.target.closest("[data-t]");
      if (!b) return;
      audio.currentTime = Number(b.getAttribute("data-t"));
      audio.play();
    });
    chaptersEl.addEventListener("click", (e) => {
      const b = e.target.closest("[data-t]");
      if (!b) return;
      audio.currentTime = Number(b.getAttribute("data-t"));
      audio.play();
    });

    tabBtns.forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-tab");
        tabBtns.forEach((x) => x.classList.toggle("is-on", x === b));
        root.querySelector("[data-panel=texto]").hidden = id !== "texto";
        afterEl.hidden = id !== "depois";
      });
    });

    document.addEventListener("keydown", (e) => {
      const tag = (e.target && e.target.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "BUTTON") return;
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      } else if (e.code === "ArrowLeft") {
        audio.currentTime = Math.max(0, audio.currentTime - 15);
      } else if (e.code === "ArrowRight") {
        audio.currentTime = audio.currentTime + 15;
      }
    });

    paint(0);
  }
})();
