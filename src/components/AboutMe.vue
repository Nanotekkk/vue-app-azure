<template>
    <section id="about" class="about-section py-5">
      <div class="container py-5">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-6 text-center">
            <h6 class="text-primary fw-bold mb-3" data-aos="fade-up">À PROPOS DE MOI</h6>
            <h2 class="display-6 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">Qui suis-je?</h2>
          </div>
        </div>
        
        <div class="row align-items-center">
          <div class="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
            <div class="about-img-wrapper">
              <img src="@/assets/img/about.jpg" alt="À propos" class="img-fluid rounded-3 about-img" />
            </div>
          </div>
          
          <div class="col-lg-7" data-aos="fade-left">
            <div class="ps-lg-4">
              <p class="lead mb-4">
                Je suis un développeur web passionné avec une forte expertise en développement front-end.
                Je me spécialise dans la création d'applications web modernes, intuitives et performantes.
              </p>
              
              <p class="mb-4">
                Avec plus de 3 ans d'expérience dans le domaine, j'ai travaillé sur divers projets allant
                des sites vitrines aux applications web complexes. J'aime résoudre des problèmes et
                transformer les idées en réalité grâce au code.
              </p>
              
              <div class="row mb-4">
                <div class="col-md-6 mb-3 mb-md-0">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Nom:</strong> Votre Nom
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Téléphone:</strong> +33 6 12 34 56 78
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Expérience:</strong> 3+ ans
                    </li>
                  </ul>
                </div>
                
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Freelance:</strong> Disponible
                    </li>
                    <li class="mb-2">
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Email:</strong> votre.email@example.com
                    </li>
                    <li>
                      <i class="bi bi-check-circle-fill text-primary me-2"></i>
                      <strong>Localisation:</strong> Paris, France
                    </li>
                  </ul>
                </div>
              </div>
              
              <a href="#" class="btn btn-primary px-4 py-2">Télécharger mon CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutMe'
  }
  </script>
  
  <style scoped lang="scss">
  .about-section {
    background-color: #f8f9fa;
  }
  
  .about-img-wrapper {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      width: 90%;
      height: 90%;
      border: 3px solid var(--bs-primary);
      bottom: -15px;
      right: -15px;
      z-index: -1;
      border-radius: 10px;
    }
  }
  
  .about-img {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  </style>