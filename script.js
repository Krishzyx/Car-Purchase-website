document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const homeContainer = document.getElementById('home-container');
    const loginContainer = document.getElementById('login-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const logoutBtn = document.getElementById('logout-btn');
  
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.text())
      .then(data => {
        if (data.includes('Welcome')) {
          loginContainer.style.display = 'none';
          homeContainer.style.display = 'block';
          welcomeMessage.textContent = data;
        } else {
          alert(data);
        }
      })
      .catch(error => console.error('Error:', error));
    });
  
    logoutBtn.addEventListener('click', () => {
      fetch('/logout')
      .then(() => {
        loginContainer.style.display = 'block';
        homeContainer.style.display = 'none';
      })
      .catch(error => console.error('Error:', error));
    });
  });
  
