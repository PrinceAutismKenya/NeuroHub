// Sign Up
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
  
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      alert(data.token ? 'Signup Successful!' : data.message);
    } catch (error) {
      alert('Signup Failed');
    }
  });
  
  // Sign In
  document.getElementById('signinForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      alert(data.token ? 'Signin Successful!' : data.message);
      if (data.token) {
        localStorage.setItem('token', data.token);
        // Redirect to a protected page
        window.location.href = '/dashboard.html';
      }
    } catch (error) {
      alert('Signin Failed');
    }
  });


  