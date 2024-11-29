<template>
  <div class="contact-page">
    <!-- Back Button -->
    <button @click="goBack" class="back-btn">Back to Profile</button>

    <!-- Contact Form -->
    <form @submit.prevent="submitForm" class="contact-form">
      <!-- Page Title Inside the Form -->
      <h1 class="contact-title">Contact Me</h1>

      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" placeholder="Type your message here" required></textarea>
      </div>

      <button type="submit" class="submit-btn">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      alert('Message Sent!');
      this.form = { name: '', email: '', message: '' };
    },
    goBack() {
      this.$router.push('/portfolio/profile'); // Navigate back to the profile page
    },
  },
};
</script>

<style scoped>
/* Overall Page Layout */
.contact-page {
  background: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ZjZTV4Y2Z6amRmdTNiZmw0ZDE4azZyanhqN2VqemUydWg1YjJ2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oLzgl79VN6bbrQUSLe/giphy.gif') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  position: relative;
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
}

/* Overlay to dim the background for readability */
.contact-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  z-index: -1;
}

/* Contact Form Container */
.contact-page .contact-form {
  background: rgba(255, 255, 255, 0.85); /* Semi-transparent white background */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

/* Page Title Inside the Form */
.contact-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 600;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

/* Back Button */
.back-btn {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 10;
}

.back-btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(52, 152, 219, 0.7);
}

.back-btn:active {
  transform: scale(1);
}

/* Form Styling */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

label {
  font-size: 1rem;
  color: #34495e;
  margin-bottom: 5px;
  font-weight: 600;
}

input,
textarea {
  width: 100%;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  transition: border 0.3s ease, box-shadow 0.3s ease;
}

input:focus,
textarea:focus {
  border: 1px solid #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.4);
  outline: none;
}

textarea {
  resize: vertical;
  height: 150px;
}

/* Submit Button */
.submit-btn {
  background-color: #3498db;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-btn:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
}

.submit-btn:active {
  transform: translateY(1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-page {
    padding: 20px;
  }

  .back-btn {
    top: 10px;
    left: 10px;
    padding: 10px 18px;
  }

  .submit-btn {
    font-size: 1rem;
    padding: 12px 18px;
  }
}
</style>
