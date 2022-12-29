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
        <h3 class="tilte">Confirm</h3>
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

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  max-width: 500px;
  text-align: center;
}

.popup-success {
  color: green;
}

.popup-error {
  color: red;
}

button {
  background-color: #fff;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 10px;
}
</style>