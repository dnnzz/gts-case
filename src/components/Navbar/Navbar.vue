<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <div class="navbar__links">
        <button class="navbar__links__button">
          <router-link to="/">{{ t('page') }} 1</router-link>
        </button>
        <button class="navbar__links__button">
          <router-link to="/page-2">{{ t('page') }} 2</router-link>
        </button>
        <button class="navbar__links__button">
          <router-link to="/page-3">{{ t('page') }} 3</router-link>
        </button>
        <button class="navbar__links__button">
          <select class="language-selector" v-model="$i18n.locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale.toUpperCase() }}</option>
          </select>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
export default {
  name:"nav-bar",
  setup() {
    const { t } = useI18n() // use as global scope
    return { t }
  }
}
</script>

<style>

</style>