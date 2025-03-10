<template>
    <section class="project-details-section py-5">
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="mb-5">
              <router-link to="/#projects" class="btn btn-outline-primary mb-4">
                <i class="bi bi-arrow-left me-2"></i> Retour aux projets
              </router-link>
              
              <h2 class="display-5 fw-bold mb-4">{{ project.title }}</h2>
              
              <div class="project-meta d-flex flex-wrap gap-4 mb-4">
                <div class="project-meta-item">
                  <i class="bi bi-calendar me-2 text-primary"></i>
                  <span>{{ project.date }}</span>
                </div>
                
                <div class="project-meta-item">
                  <i class="bi bi-tag me-2 text-primary"></i>
                  <span>{{ project.category }}</span>
                </div>
                
                <div class="project-meta-item">
                  <i class="bi bi-person me-2 text-primary"></i>
                  <span>{{ project.client }}</span>
                </div>
              </div>
            </div>
            
            <div class="project-image mb-5">
              <img :src="project.image" :alt="project.title" class="img-fluid rounded-3 shadow" />
            </div>
            
            <div class="project-content mb-5">
              <h3 class="fw-bold mb-4">Description du projet</h3>
              <p class="lead mb-4">{{ project.description }}</p>
              <p>{{ project.detailedDescription }}</p>
            </div>
            
            <div class="project-technologies mb-5">
              <h3 class="fw-bold mb-4">Technologies utilisées</h3>
              <div class="d-flex flex-wrap gap-2">
                <span v-for="(tech, index) in project.technologies" :key="index" 
                      class="badge bg-light text-dark py-2 px-3">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="project-features mb-5">
              <h3 class="fw-bold mb-4">Fonctionnalités principales</h3>
              <ul class="list-unstyled">
                <li v-for="(feature, index) in project.features" :key="index" class="mb-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <i class="bi bi-check-circle-fill text-primary"></i>
                    </div>
                    <div>
                      <h5 class="fw-bold mb-1">{{ feature.title }}</h5>
                      <p class="mb-0">{{ feature.description }}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="project-links mb-5">
              <h3 class="fw-bold mb-4">Liens du projet</h3>
              <div class="d-flex flex-wrap gap-3">
                <a :href="project.liveUrl" target="_blank" class="btn btn-primary">
                  <i class="bi bi-globe me-2"></i> Voir le site
                </a>
                <a :href="project.githubUrl" target="_blank" class="btn btn-dark">
                  <i class="bi bi-github me-2"></i> Code source
                </a>
              </div>
            </div>
            
            <div class="project-gallery">
              <h3 class="fw-bold mb-4">Galerie du projet</h3>
              <div class="row g-3">
                <div v-for="(image, index) in project.gallery" :key="index" 
                     class="col-md-6 col-lg-4">
                  <div class="gallery-item">
                    <img :src="image" alt="Image du projet" class="img-fluid rounded-3 shadow-sm" />
                  </div>
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
    name: 'ProjectDetails',
    data() {
      return {
        // Exemple de données de projet, à remplacer par une requête API ou store Vuex
        project: {
          id: 1,
          title: 'Application de gestion de tâches',
          date: 'Janvier 2023',
          category: 'Application Web',
          client: 'Entreprise XYZ',
          image: require('@/assets/img/projects/project1.jpg'),
          description: 'Une application de gestion de tâches moderne avec authentification, suivi des tâches en temps réel et statistiques.',
          detailedDescription: 'Ce projet a été développé pour aider les équipes à mieux gérer leurs tâches quotidiennes. L\'application offre une interface utilisateur intuitive et réactive, permettant aux utilisateurs de créer, modifier et suivre leurs tâches facilement. Les fonctionnalités incluent la gestion des échéances, les étiquettes personnalisées, les notifications et un tableau de bord avec des statistiques détaillées.',
          technologies: ['Vue.js', 'Vuex', 'Firebase', 'SCSS', 'Bootstrap 5', 'Axios'],
          features: [
            {
              title: 'Gestion des tâches en temps réel',
              description: 'Création, modification et suppression des tâches avec mise à jour instantanée pour tous les utilisateurs.'
            },
            {
              title: 'Tableau de bord analytique',
              description: 'Visualisation des données de performance et de progression des tâches avec des graphiques interactifs.'
            },
            {
              title: 'Interface responsive',
              description: 'Adaptation parfaite à tous les appareils, du mobile au grand écran de bureau.'
            },
            {
              title: 'Système de notification',
              description: 'Alertes pour les échéances approchantes et les mises à jour importantes.'
            }
          ],
          liveUrl: 'https://projet-exemple.com',
          githubUrl: 'https://github.com/votre-nom/projet-exemple',
          gallery: [
            require('@/assets/img/projects/project1-1.jpg'),
            require('@/assets/img/projects/project1-2.jpg'),
            require('@/assets/img/projects/project1-3.jpg'),
            require('@/assets/img/projects/project1-4.jpg'),
            require('@/assets/img/projects/project1-5.jpg'),
            require('@/assets/img/projects/project1-6.jpg')
          ]
        }
      }
    },
    mounted() {
      // Charger les détails du projet en fonction de l'ID dans l'URL
      // this.loadProject(this.$route.params.id);
    },
    methods: {
      loadProject(id) {
        // Ici, vous pourriez charger les données du projet depuis une API ou un store
        console.log(`Chargement du projet avec l'ID: ${id}`);
        // this.project = ... fetch data ...
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .project-details-section {
    background-color: #f8f9fa;
  }
  
  .project-meta {
    &-item {
      display: flex;
      align-items: center;
      font-weight: 500;
    }
  }
  
  .project-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .project-content {
    line-height: 1.8;
  }
  
  .gallery-item {
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    img {
      transition: all 0.5s ease;
      
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  </style>