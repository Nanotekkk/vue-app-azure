<template>
  <div>
    <HeroSection />
    <AboutMe />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import AboutMe from '@/components/AboutMe.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    AboutMe,
    Skills,
    Experience,
    Projects,
    Contact
  }
}
</script>