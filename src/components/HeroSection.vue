<template>
    <section class="hero-section py-5">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <span class="badge bg-primary mb-3">Développeur Web</span>
            <h1 class="display-4 fw-bold mb-3">
              Bonjour, je suis<br />
              <span class="text-primary">Votre Nom</span>
            </h1>
            <p class="lead mb-4">
              Développeur web passionné spécialisé en création d'applications web modernes
              et performantes avec Vue.js et d'autres technologies front-end.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <a href="#contact" class="btn btn-primary px-4 py-2">Me contacter</a>
              <a href="#projects" class="btn btn-outline-dark px-4 py-2">Voir mes projets</a>
            </div>
            
            <div class="mt-5 d-flex gap-3">
              <a href="https://github.com/votre-nom" target="_blank" class="social-icon">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/votre-nom" target="_blank" class="social-icon">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="mailto:votre-email@example.com" class="social-icon">
                <i class="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          
          <div class="col-lg-6 text-center" data-aos="fade-left">
            <div class="profile-img-wrapper">
              <img src="@/assets/img/profile.jpg" alt="Votre Nom" class="img-fluid rounded-circle profile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  
  export default {
    name: 'HeroSection',
    mounted() {
      AOS.init({
        duration: 1000,
        once: true
      })
    }
  }
  </script>
  
  <style scoped lang="scss">
  .hero-section {
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  }
  
  .profile-img-wrapper {
    position: relative;
    width: 320px;
    height: 320px;
    margin: 0 auto;
    
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: var(--bs-primary);
      top: -15px;
      left: 15px;
      z-index: -1;
    }
  }
  
  .profile-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 8px solid white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    color: var(--bs-primary);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      background-color: var(--bs-primary);
      color: #fff;
    }
    
    i {
      font-size: 1.2rem;
    }
  }
  </style>