<template>
    <section id="experience" class="experience-section py-5">
      <div class="container py-5">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-6 text-center">
            <h6 class="text-primary fw-bold mb-3" data-aos="fade-up">MON PARCOURS</h6>
            <h2 class="display-6 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">Expérience & Formation</h2>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h3 class="experience-title mb-4">
              <i class="bi bi-briefcase me-2 text-primary"></i> Expérience professionnelle
            </h3>
            
            <div class="timeline">
              <div class="timeline-item" v-for="(item, index) in experience" :key="'exp-'+index">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-header d-flex flex-column flex-md-row justify-content-between mb-2">
                    <h4 class="timeline-title">{{ item.position }}</h4>
                    <span class="timeline-period">{{ item.period }}</span>
                  </div>
                  <h5 class="timeline-company mb-2">{{ item.company }}</h5>
                  <p class="timeline-desc">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6" data-aos="fade-left">
            <h3 class="experience-title mb-4">
              <i class="bi bi-mortarboard me-2 text-primary"></i> Formation
            </h3>
            
            <div class="timeline">
              <div class="timeline-item" v-for="(item, index) in education" :key="'edu-'+index">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div class="timeline-header d-flex flex-column flex-md-row justify-content-between mb-2">
                    <h4 class="timeline-title">{{ item.degree }}</h4>
                    <span class="timeline-period">{{ item.period }}</span>
                  </div>
                  <h5 class="timeline-company mb-2">{{ item.institution }}</h5>
                  <p class="timeline-desc">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Experience',
    data() {
      return {
        experience: [
          {
            position: 'Développeur Front-end',
            company: 'Entreprise XYZ, Paris',
            period: '2023 - Présent',
            description: 'Développement d\'applications web modernes avec Vue.js, React, et d\'autres frameworks front-end. Collaboration avec des designers UX/UI pour créer des interfaces utilisateur intuitives.'
          },
          {
            position: 'Développeur Web Junior',
            company: 'Startup ABC, Lyon',
            period: '2021 - 2023',
            description: 'Développement de sites web responsives pour divers clients. Maintenance et mise à jour de sites existants. Intégration de systèmes de gestion de contenu (CMS).'
          },
          {
            position: 'Stage en développement web',
            company: 'Agence Web DEF, Paris',
            period: '2020 - 2021',
            description: 'Assistance dans le développement de sites web pour des clients. Apprentissage des bonnes pratiques de développement web.'
          }
        ],
        education: [
          {
            degree: 'Master en Développement Web',
            institution: 'Université de Paris',
            period: '2018 - 2020',
            description: 'Spécialisation en développement front-end et technologies web modernes. Projets académiques incluant la création d\'applications web complètes.'
          },
          {
            degree: 'Licence en Informatique',
            institution: 'Université de Lyon',
            period: '2015 - 2018',
            description: 'Formation générale en informatique avec des cours en programmation, algorithmique, bases de données et développement web.'
          },
          {
            degree: 'Baccalauréat Scientifique',
            institution: 'Lycée International, Paris',
            period: '2012 - 2015',
            description: 'Option Mathématiques et Sciences de l\'Ingénieur. Projets informatiques et robotiques.'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .experience-section {
    background-color: #fff;
  }
  
  .experience-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  
  .timeline {
    position: relative;
    padding-left: 30px;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 5px;
      height: 100%;
      width: 1px;
      background-color: #e0e0e0;
    }
    
    &-item {
      position: relative;
      padding-bottom: 30px;
      
      &:last-child {
        padding-bottom: 0;
      }
    }
    
    &-dot {
      position: absolute;
      left: -38px;
      top: 5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: var(--bs-primary);
      border: 3px solid #fff;
      box-shadow: 0 0 0 1px var(--bs-primary);
    }
    
    &-content {
      background-color: #f8f9fa;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      
      &:hover {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
      }
    }
    
    &-title {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0;
    }
    
    &-period {
      font-size: 0.9rem;
      color: var(--bs-primary);
      font-weight: 500;
    }
    
    &-company {
      font-size: 1rem;
      color: #6c757d;
      font-weight: 500;
    }
    
    &-desc {
      margin-bottom: 0;
    }
  }
  </style>