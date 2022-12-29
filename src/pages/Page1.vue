<template>
  <div class="page1">
    <h1>Page 1</h1>
    <Popup
    v-bind:showPopup="showPopup"
    v-bind:type="type"
    v-bind:message="message"
    @update:showPopup="showPopup = $event"
  />
  <button @click="showSuccessPopup">Kaydet</button>
  </div>
</template>

<script>
export default {
  name:"Page-1",
  data() {
    return {
      showPopup: false,
      type: 'success',
      message: ''
    }
  },
  methods: {
    showSuccessPopup() {
      this.showPopup = true
      this.type = 'success'
      this.message = 'Your action was successful!'
    }
  }
}
</script>

<style>

</style>