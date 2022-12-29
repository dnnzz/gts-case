<template>
  <Navbar />
  <router-view class="content" />
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a{
  font-family: 'Roboto';
  font-weight: bold;
}
.content{
  margin-top: 100px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
