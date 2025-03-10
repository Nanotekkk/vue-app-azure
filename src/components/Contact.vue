<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.form);
      // Reset form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.contact h1 {
  text-align: center;
}
.contact form div {
  margin-bottom: 15px;
}
.contact form label {
  display: block;
  margin-bottom: 5px;
}
.contact form input,
.contact form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.contact form button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.contact form button:hover {
  background-color: #0056b3;
}
</style>
