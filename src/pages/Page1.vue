<template>
  <div class="page-1">
    <h1>{{ t('page') }} 1</h1>
    <Popup
    v-bind:showPopup="showPopup"
    v-bind:type="type"
    v-bind:message="message"
    @update:showPopup="showPopup = $event"
  />
   <div class="button__wrapper">
    <button @click="showSuccessPopup">{{ t('submitBtnText') }}</button>
   </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name:"Page-1",
  setup() {
    const { t } = useI18n() // use as global scope
    return { t }
  },
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
      this.message = this.t('successPopupText')
    }
  }
}
</script>

<style scoped>
.button__wrapper button{
  padding: 10px 40px;
	cursor: pointer;
	font-size: 20px;
  border-radius: 10px;
	border: 2px solid #000;
	box-shadow: 10px 10px;
	background-color: #a7c957;
	transition: box-shadow 300ms ease, transform 500ms ease;
}
.button__wrapper button:hover {
	box-shadow: none;
}
.button__wrapper button:active {
	transform: scale(0.9);
}
</style>