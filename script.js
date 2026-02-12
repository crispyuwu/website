// Nav Animation stuff

const nav = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-link");
const highlight = document.querySelector(".highlight");

function moveHighlight(el) {
  highlight.style.width = `${el.offsetWidth}px`;
  highlight.style.left = `${el.offsetLeft}px`;
}

const activeLink = document.querySelector(".nav-link.active");
if (activeLink) moveHighlight(activeLink);

links.forEach((link) => {
  link.addEventListener("mouseenter", () => moveHighlight(link));

  nav.addEventListener("mouseleave", () => {
    if (activeLink) moveHighlight(activeLink);
  });
});


// Lil guy timer thing

let totalSeconds = 0;
const timerSpan = document.getElementById('time-counter');

setInterval(() => {
  totalSeconds++;

  const minutes = Math.floor(totalSeconds / 60);

  timerSpan.textContent = `${minutes} mins`;
}, 1000);


// Find userAgent and input it into #agent

const agentElement = document.getElementById('agent');

const ua = navigator.userAgent.toLowerCase();
let browser = "unknown";

if (ua.includes("firefox")) browser = "Firefox";
else if (ua.includes("edg")) browser = "Edge";
else if (ua.includes("opr") || ua.includes("opera")) browser = "Opera";
else if (ua.includes("chrome")) browser = "Chrome";
else if (ua.includes("safari")) browser = "Safari";

agentElement.textContent = `${browser}`;