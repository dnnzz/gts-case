<template>
  <div class="navbar">
    <div class="navbar__wrapper">
      <div class="navbar__links">
        <button class="navbar__links__button">
          <router-link to="/">Page 1</router-link>
        </button>
        <button class="navbar__links__button">
          <router-link to="/page-2">Page 2</router-link>
        </button>
        <button class="navbar__links__button">
          <router-link to="/page-3">Page 3</router-link>
        </button>
        <button class="navbar__links__button">
          <select class="language-selector">
            <option value="tr">TR</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"nav-bar"
}
</script>

<style>

</style>