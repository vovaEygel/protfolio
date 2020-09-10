<template>
  <div class="contact-form" id="contactMe">
    <form class="form" @submit="onSubmit">
      <input
        required
        name="name"
        v-model="contact.name"
        placeholder="Name"
        type="text"
        autocomplete="off"
      />
      <input
        required
        name="email"
        v-model="contact.email"
        placeholder="E-mail"
        type="email"
        autocomplete="off"
      />
      <textarea name="message" v-model="contact.message" rows="4" placeholder="Message"></textarea>
      <button class="button">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: ""
      },
      isSending: false
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.isSending = true;
    }
  }
};
</script>
