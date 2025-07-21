// Cek login
const login = JSON.parse(localStorage.getItem('difabelajar_login'));
if (!login) window.location.href = "login.html";

const username = login.username;
const progressKey = 'difabelajar_progress_' + username;
let progress = JSON.parse(localStorage.getItem(progressKey)) || [];

const topicList = document.getElementById('topicList');
for (let i = 1; i <= 10; i++) {
  const li = document.createElement('li');
  li.style.marginBottom = "1em";
  const done = progress.includes(i);
  li.innerHTML = `
    <span style="font-weight:bold;">Topik ${i}</span>
    ${done ? '✅' : ''}
    <br>
    <a href="materi/topic${i}.html" class="btn" style="margin-top:0.5em;">
      ${done ? 'Ulangi Materi' : 'Mulai Belajar'}
    </a>
  `;
  topicList.appendChild(li);
}

window.logout = function() {
  localStorage.removeItem('difabelajar_login');
  window.location.href = "login.html";
}