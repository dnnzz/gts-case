<template>
  <div class="popup" v-if="showPopup">
    <div class="popup__wrapper">
      <div v-if="mode === 'success'" class="popup__success">
        <h3 class="title">Success</h3>
        <p class="message">{{ message }}</p>
        <button class="close-btn" @click="closePopup">Close</button>
      </div>
      <div v-if="mode === 'error'" class="popup__error">
        <h3 class="title">Error</h3>
        <p class="message">{{ message }}</p>
        <button class="close-btn" @click="closePopup">Close</button>
      </div>
      <div v-if="mode === 'confirm'" class="popup__confirm">
        <h3 class="title">Confirm</h3>
        <p class="message">{{ message }}</p>
        <button class="confirm-btn" @click="confirm">Yes</button>
        <button class="close-btn" @click="closePopup">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  props: {
    showPopup: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "success",
    },
    message: {
      type: String,
      default: "",
    },
    confirmAction: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    closePopup() {
      this.$emit("update:showPopup", false);
    },
    confirm() {
      this.confirmAction();
      this.closePopup();
    },
  },
};
</script>