<template>
    <section id="skills" class="skills-section py-5">
      <div class="container py-5">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-6 text-center">
            <h6 class="text-primary fw-bold mb-3" data-aos="fade-up">MES COMPÉTENCES</h6>
            <h2 class="display-6 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">Ce que je sais faire</h2>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4" v-for="(skill, index) in technicalSkills" :key="index"
               data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="skill-card h-100">
              <div class="skill-icon">
                <i :class="skill.icon"></i>
              </div>
              <h4 class="skill-title">{{ skill.name }}</h4>
              <div class="skill-progress">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" 
                       :style="{ width: skill.level + '%' }" 
                       :aria-valuenow="skill.level" aria-valuemin="0" aria-valuemax="100">
                    {{ skill.level }}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row mt-5">
          <div class="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <h3 class="fw-bold mb-4">Compétences techniques</h3>
            <div class="row">
              <div class="col-md-6" v-for="(skill, index) in otherTechnicalSkills" :key="'tech-'+index">
                <div class="d-flex align-items-center mb-3">
                  <div class="skill-dot me-2"></div>
                  <span>{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6" data-aos="fade-left">
            <h3 class="fw-bold mb-4">Compétences personnelles</h3>
            <div class="row">
              <div class="col-md-6" v-for="(skill, index) in softSkills" :key="'soft-'+index">
                <div class="d-flex align-items-center mb-3">
                  <div class="skill-dot me-2"></div>
                  <span>{{ skill }}</span>
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
    name: 'Skills',
    data() {
      return {
        technicalSkills: [
          { name: 'HTML/CSS', level: 95, icon: 'bi bi-code-slash' },
          { name: 'JavaScript', level: 90, icon: 'bi bi-filetype-js' },
          { name: 'Vue.js', level: 85, icon: 'bi bi-code' },
          { name: 'Responsive Design', level: 90, icon: 'bi bi-laptop' },
          { name: 'Node.js', level: 75, icon: 'bi bi-server' },
          { name: 'SQL', level: 70, icon: 'bi bi-database' }
        ],
        otherTechnicalSkills: [
          'Git/GitHub', 'REST API', 'SASS/SCSS', 
          'Bootstrap', 'Webpack', 'Firebase',
          'Jest/Mocha', 'UI/UX Design'
        ],
        softSkills: [
          'Résolution de problèmes', 'Communication', 
          'Travail déquipe', 'Gestion du temps', 
          'Adaptabilité', 'Créativité',
          'Autonomie', 'Esprit critique'
        ]
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .skill-card {
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
  }
  
  .skill-icon {
    width: 60px;
    height: 60px;
    background-color: rgba(var(--bs-primary-rgb), 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    
    i {
      font-size: 1.8rem;
      color: var(--bs-primary);
    }
  }
  
  .skill-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .skill-progress {
    .progress {
      height: 8px;
      background-color: #f1f1f1;
    }
    
    .progress-bar {
      background-color: var(--bs-primary);
    }
  }
  
  .skill-dot {
    width: 10px;
    height: 10px;
    background-color: var(--bs-primary);
    border-radius: 50%;
  }
  </style>