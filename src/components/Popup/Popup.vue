<template>
  <div class="popup" v-if="showPopup">
    <div
    v-bind:class="getClass" 
    class="popup__wrapper">
      <div class="popup__icon">
        <svg-icon type="mdi" :path="mdiInformation" :size="48"></svg-icon>
      </div>
      <div v-if="mode === 'success'" class="popup__success">
        <h3 class="title">{{ t('successPopupTitle') }}</h3>
        <p class="message">{{ message }}</p>
        <button class="close-btn" @click="closePopup">{{ t('closeButtonText') }}</button>
      </div>
      <div v-if="mode === 'error'" class="popup__error">
        <h3 class="title">{{ t('errorPopupTitle') }}</h3>
        <p class="message">{{ message }}</p>
        <button class="close-btn" @click="closePopup">{{ t('closeButtonText') }}</button>
      </div>
      <div v-if="mode === 'confirm'" class="popup__confirm">
        <h3 class="title">{{ t('confirmPopupTitle') }}</h3>
        <p class="message">{{ message }}</p>
        <button class="confirm-btn" @click="confirm">{{ t('confirmButtonText') }}</button>
        <button class="close-btn" @click="closePopup">{{ t('cancelButtonText') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiInformation } from '@mdi/js';
import { useI18n } from 'vue-i18n';
export default {
  name: "PopUp",
  setup() {
    const { t } = useI18n() // use as global scope
    return { t , mdiInformation}
  },
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
    cancelAction: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    closePopup() {
      if(this.mode === 'confirm' && this.cancelAction) {
        this.cancelAction();
      } else {
        this.$emit("update:showPopup", false);
      }
    },
    confirm() {
      this.confirmAction();
    }
  },
  computed:{
    getClass:function() {
      return {
        'popup__wrapper--success': this.mode === 'success',
        'popup__wrapper--error': this.mode === 'error',
        'popup__wrapper--confirm': this.mode === 'confirm',
      }
    }
  }
};
</script>