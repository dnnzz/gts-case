<template>
  <div class="page-2">
    <h1>{{ t('page') }} 2</h1>
    <Popup
    v-bind:showPopup="showPopup"
    v-bind:mode="type"
    v-bind:message="message"
    @update:showPopup="showPopup = $event"
  />
   <div class="button__wrapper">
    <button @click="showErrorPopup">{{ t('page') }}</button>
   </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name:"Page-2",
  setup() {
    const { t } = useI18n() // use as global scope
    return { t }
  },
  data() {
    return {
      showPopup: false,
      type: 'error',
      message: ''
    }
  },
  methods: {
    showErrorPopup() {
      this.showPopup = true
      this.type = 'error'
      this.message = this.t('errorPopupText')
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
	background-color: lightsalmon;
	transition: box-shadow 300ms ease, transform 500ms ease;
}
.button__wrapper button:hover {
	box-shadow: none;
}
.button__wrapper button:active {
	transform: scale(0.9);
}
</style>