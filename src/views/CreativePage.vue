<template>
  <div class="creative-page">
    <!-- Back Button -->
    <button @click="goBack" class="back-btn" aria-label="Back to Profile">Back to Profile</button>

    <!-- My Hobbies Title with Background Box -->
    <div class="title-box">
      <h1 class="title">Hobby and Interests</h1>
    </div>

    <!-- Hobby List with Flexbox Layout (2x2 alignment) -->
    <div class="hobby-list">
      <div
        class="hobby-card"
        v-for="hobby in hobbies"
        :key="hobby.id"
        tabindex="0" 
        aria-label="Hobby card with details"
      >
        <img
          :src="hobby.photo"
          :alt="hobby.name"
          class="hobby-image"
          aria-label="Hobby image"
        />
        <h2 class="hobby-name">{{ hobby.name }}</h2>
        <p class="hobby-description">{{ hobby.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreativePage',
  data() {
    return {
      hobbies: [
        {
          id: 1,
          name: 'Basketball',
          photo: require('/public/bball.jpg'),
          description: 'Basketball is a physical game with better sportsmanship.',
        },
        {
          id: 2,
          name: 'Online Games',
          photo: require('/public/valo.png'),
          description: 'Playing Valorant is my stress reliever, but sometimes it can become my stressor.',
        },
        {
          id: 3,
          name: 'Traveling',
          photo: require('/public/travel.jpg'),
          description: 'Exploring different cities in the Philippines.',
        },
        {
          id: 4,
          name: 'Hangout with friends',
          photo: require('/public/bilyar.jpg'),
          description: 'Hanging out with my friends feels like a dream come true since we only met in Valorant.',
        },
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
/* Overall Page Layout with GIF Background */
.creative-page {
  text-align: center;
  padding: 40px;
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
.creative-page::before {
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

/* Hobby List with Flexbox Layout (2x2) */
.hobby-list {
  display: flex;
  flex-wrap: wrap; /* Ensure they wrap into the next line */
  justify-content: space-evenly; /* Space evenly between the cards */
  max-width: 900px;
  margin: 40px auto; /* Centering the cards and adding margin */
  padding: 0 20px; /* Adding padding around the cards */
}

/* Hobby Card Styling */
.hobby-card {
  width: 45%; /* Making sure cards take up about half the space in each row */
  margin-bottom: 20px; /* Adding space between the rows */
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  background-color: rgba(255, 255, 255, 0.85); /* Semi-transparent white */
  overflow: hidden;
}

.hobby-card:hover,
.hobby-card:focus {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
}

.hobby-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

.hobby-name {
  font-size: 1.6rem;
  margin: 15px 0;
  color: #333;
  font-weight: 600;
}

.hobby-description {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* Back Button Styling (Top Left) */
.back-btn {
  background-color: #3498db; /* Blue matching profile button */
  color: white;
  padding: 12px 24px;
  margin: 10px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 20px;
  left: 20px; /* Adjusting to left */
}

.back-btn:hover {
  background-color: #2980b9; /* Matching hover color */
  transform: translateY(-3px);
}

.back-btn:active {
  transform: translateY(2px);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .creative-page {
    padding: 25px;
  }

  .hobby-card {
    width: 90%;
    max-width: 350px;
  }

  .title {
    font-size: 2.2rem;
  }

  .back-btn {
    padding: 10px 20px;
    font-size: 16px;
    top: 10px; /* Top margin adjustment for mobile */
    left: 20px;
  }

  .hobby-list {
    justify-content: center; /* Center the cards in mobile view */
  }
}
</style>
