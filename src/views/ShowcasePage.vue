<template>
  <div class="showcase-page">
    <!-- Back Button -->
    <button @click="goBack" class="back-btn">Back to Profile</button>
  
    <!-- Page Title -->
    <div class="title-box">
      <h1 class="title">My Projects</h1>
    </div>
  
    <!-- Project Gallery -->
    <div class="gallery">
      <div v-for="project in projects" :key="project.id" class="card">
        <h2 class="project-name">{{ project.name }}</h2>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: 'Smart Flame Guard', description: 'A device to keep safety in LPG leakage' },
        { id: 2, name: 'AquaMonn', description: 'A device to help our farmer in giving the right adjustment in water parameters for larval rearing.' },
        { id: 3, name: 'Grab A Cut', description: 'A reservation system for Barbershop.' },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.push('/portfolio/profile'); // Navigate back to the profile page
    },
  },
};
</script>

<style scoped>
/* Showcase Page Container with GIF Background */
.showcase-page {
  text-align: center;
  padding: 40px 20px;
  font-family: 'Poppins', sans-serif;
  background: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ZjZTV4Y2Z6amRmdTNiZmw0ZDE4azZyanhqN2VqemUydWg1YjJ2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oLzgl79VN6bbrQUSLe/giphy.gif') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  position: relative;
  color: white;
}

/* Overlay to dim the background for readability */
.showcase-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  z-index: -1;
}

/* Title Box Styling (Centered) */
.title-box {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px 25px;
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 30px;
  position: absolute;
  top: 20px; /* Slightly push down from the top */
  left: 50%; /* Center horizontally */
  transform: translateX(-50%); /* Proper centering */
}

.title {
  font-size: 2.6rem;
  margin: 0;
  color: white;
  font-weight: 700;
}

/* Project Gallery */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* Project Card Styling */
.card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.85); /* Semi-transparent white */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.project-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #34495e;
}

.project-description {
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
}

/* Back Button Styling */
.back-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.back-btn:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .showcase-page {
    padding: 20px;
  }

  .back-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }

  .title {
    font-size: 2rem;
  }

  .project-name {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 1rem;
  }
}
</style>