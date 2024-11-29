<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="login-header">ViñasHub</h1>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" v-model="username" id="username" placeholder="Username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" placeholder="Password" required />
        </div>
        <button type="submit" class="login-btn">Sign in</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>

      <!-- Aesthetic Sign-Up Section -->
      <div class="signup-box">
        <h2 class="signup-header">New Here?</h2>
        <p class="signup-text">Create an account and share your profile with us.</p>
        <button @click="navigateToSignUp" class="signup-btn">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.username === 'gabriel' && this.password === 'pogi') {
        this.$router.push('/portfolio/profile');
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    },
    navigateToSignUp() {
      this.$router.push('/signup'); // Navigate to the sign-up page
    },
  },
};
</script>

<style scoped>
/* Basic reset and full height container */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ZjZTV4Y2Z6amRmdTNiZmw0ZDE4azZyanhqN2VqemUydWg1YjJ2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oLzgl79VN6bbrQUSLe/giphy.gif') no-repeat center center fixed;
  background-size: cover;
}

.login-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  z-index: 1;
}

.login-container {
  position: relative;
  z-index: 2;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  padding: 50px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  transition: transform 0.3s ease;
}

.login-container:hover {
  transform: translateY(-6px);
}

.login-header {
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 25px;
  text-align: left;
}

label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
  display: block;
}

input {
  width: 100%;
  padding: 16px;
  font-size: 1.1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 18px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #2b90d9;
  box-shadow: 0 0 10px rgba(43, 144, 217, 0.3);
}

.login-btn {
  width: 100%;
  padding: 16px;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #004a71, #005f8b);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-btn:hover {
  background: linear-gradient(135deg, #003d5a, #004a71);
}

.error-message {
  color: #d9534f;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Aesthetic Sign-Up Box with Transparent Background */
.signup-box {
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white */
  padding: 25px;
  border-radius: 12px;
  border: 1px solid rgba(43, 144, 217, 0.5); /* Subtle border */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  backdrop-filter: blur(5px); /* Slight blur effect */
}

.signup-header {
  font-size: 1.5rem;
  color: #2b90d9;
  font-weight: bold;
}

.signup-text {
  font-size: 1rem;
  color: #555;
  margin: 10px 0 20px;
}

.signup-btn {
  padding: 12px 25px;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #00b4d8, #0077b6);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.signup-btn:hover {
  background: linear-gradient(135deg, #0077b6, #005f8b);
  transform: scale(1.05);
}

.signup-btn:active {
  transform: scale(0.98);
}

/* Media query for smaller screens */
@media (max-width: 480px) {
  .login-container {
    padding: 25px;
  }

  .login-header {
    font-size: 1.6rem;
  }

  .login-btn {
    font-size: 1.1rem;
  }

  .signup-box {
    padding: 20px;
  }

  .signup-header {
    font-size: 1.2rem;
  }

  .signup-text {
    font-size: 0.9rem;
  }
}
</style>
