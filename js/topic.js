// Cek login
const login = JSON.parse(localStorage.getItem('difabelajar_login'));
if (!login) window.location.href = "../login.html";

const username = login.username;
const progressKey = 'difabelajar_progress_' + username;
let progress = JSON.parse(localStorage.getItem(progressKey)) || [];

const topicNumber = window.topicConfig.topicNumber;
const nextUrl = window.topicConfig.nextUrl;
const backUrl = window.topicConfig.backUrl;

const doneBtn = document.getElementById('doneBtn');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');

// Jika sudah selesai, tampilkan Next
if (progress.includes(topicNumber)) {
  nextBtn.style.display = "block";
}

// Selesai Mempelajari
doneBtn.addEventListener('click', function() {
  if (!progress.includes(topicNumber)) {
    progress.push(topicNumber);
    localStorage.setItem(progressKey, JSON.stringify(progress));
  }
  nextBtn.style.display = "block";
  doneBtn.disabled = true;
});

// Next hanya bisa jika sudah selesai
nextBtn.addEventListener('click', function() {
  if (progress.includes(topicNumber)) {
    window.location.href = nextUrl;
  }
});

// Back
backBtn.addEventListener('click', function() {
  window.location.href = backUrl;
});