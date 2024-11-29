<template>
  <div class="profile-page">
    <div class="profile-container">
      <div class="profile-header">
        <!-- Profile Photo -->
        <img :src="profile.photo" alt="Profile Photo" class="profile-photo" />
        <h1>{{ profile.name }}</h1>
        <p class="bio">{{ profile.bio }}</p>
      </div>

      <div class="social-links">
        <a v-for="(link, platform) in profile.socialMediaLinks" 
           :key="platform" 
           :href="link"
           :title="platform"
           target="_blank" 
           class="social-link">
          <img :src="getIcon(platform)" :alt="platform" />
        </a>
      </div>

      <!-- Navigation Buttons -->
      <div class="navigation-buttons">
        <button @click="navigateTo('creative')" class="nav-btn">Creative</button>
        <button @click="navigateTo('contact')" class="nav-btn">Contact</button>
        <button @click="navigateTo('showcase')" class="nav-btn">Showcase</button>
      </div>

      <!-- Logout Button -->
      <div class="logout-button">
        <button @click="logout" class="nav-btn logout-btn">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        name: 'Gabriel Edmund G. Viñas',
        photo: require('/public/haha.jpg'),
        bio: 'Before the pandemic struck, my main sport was riding a BMX. I learned a lot of tricks and developed a strong mindset of no pain, no gain. I also made many friends through BMX, and they became my motivation to keep practicing the tricks. Later, someone told me that my height was being wasted if I only ride a BMX, so I decided to start playing basketball. Now, basketball is my main sport...',
        socialMediaLinks: {
          Facebook: 'https://facebook.com/gabriel.dragsid',
          GitHub: 'https://github.com/gabgabgabgabgabgabgab2/Final-Vue',
          Instagram: 'https://www.instagram.com/gab_egv/', // Instagram link added
        },
      },
    };
  },
  methods: {
    getIcon(platform) {
      switch (platform) {
        case 'Facebook':
          return require('/public/fb.png');
        case 'GitHub':
          return 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg';
        case 'Instagram': // Case for Instagram
          return 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png';
        default:
          return '';
      }
    },
    navigateTo(page) {
      this.$router.push(`/portfolio/${page}`);
    },
    logout() {
      localStorage.removeItem('userToken');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Overall Page Layout */
.profile-page {
  background: url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3ZjZTV4Y2Z6amRmdTNiZmw0ZDE4azZyanhqN2VqemUydWg1YjJ2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oLzgl79VN6bbrQUSLe/giphy.gif') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh; /* Ensure the background covers the full viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Profile Container */
.profile-container {
  background: rgba(255, 255, 255, 0.8); /* Slight white background to make text more readable */
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 900px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

/* Profile Header */
.profile-header {
  margin-bottom: 25px;
}

.profile-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 5px solid #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  object-fit: cover;
  object-position: center;
}

.profile-photo:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
}

h1 {
  color: #333;
  font-size: 2.4rem;
  font-weight: 700;
  margin-top: 20px;
}

.bio {
  font-style: italic;
  color: #555;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 20px auto;
}

/* Social Media Icons */
.social-links {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 30px 0;
}

.social-link img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 50%; /* Makes Instagram and other logos circular */
}

.social-link img:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

/* Navigation Buttons */
.navigation-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-btn {
  background-color: #3498db; /* Green */
  color: white;
  padding: 14px 30px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.nav-btn:hover {
  background-color: #5aa7da; /* Darker Green */
  transform: translateY(-4px);
}

.nav-btn:active {
  transform: translateY(2px);
}

/* Logout Button */
.logout-button {
  margin-top: 30px;
}

.logout-btn {
  background-color: #f44336; /* Red */
  color: white;
  padding: 14px 30px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.logout-btn:hover {
  background-color: #d32f2f; /* Darker Red */
  transform: translateY(-4px);
}

.logout-btn:active {
  transform: translateY(2px);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .profile-container {
    padding: 20px;
  }

  .profile-photo {
    width: 140px;
    height: 140px;
  }

  .social-links {
    gap: 15px;
  }

  .nav-btn, .logout-btn {
    padding: 12px 25px;
    font-size: 16px;
  }
}
</style>
