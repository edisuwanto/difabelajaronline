    // Membuat 25 akun user1 - user25 dengan password sama
    const users = [];
    for (let i = 1; i <= 25; i++) {
      users.push({ username: "user" + i, password: "difabelajar2025" });
    }

    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const uname = document.getElementById('username').value.trim();
      const pwd = document.getElementById('password').value.trim();
      const found = users.find(u => u.username === uname && u.password === pwd);
      if (found) {
        localStorage.setItem('difabelajar_login', JSON.stringify({ username: uname }));
        // Inisialisasi progres jika belum ada
        if (!localStorage.getItem('difabelajar_progress_' + uname)) {
          localStorage.setItem('difabelajar_progress_' + uname, JSON.stringify([]));
        }
        window.location.href = "dashboard.html";
      } else {
        document.getElementById('loginError').textContent = "Username atau password salah.";
        document.getElementById('loginError').style.display = "block";
      }
    });