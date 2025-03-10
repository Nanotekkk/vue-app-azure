<template>
  <div class="projects">
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        { id: 3, name: 'Project 3' }
      ]
    };
  }
};
</script>

<style scoped>
.projects {
  padding: 20px;
}

.projects h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.projects ul {
  list-style-type: none;
  padding: 0;
}

.projects li {
  background: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
}
</style>
