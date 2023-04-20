<template>
    <HeaderComponent class="fixed-top"></HeaderComponent>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <!-- <router-view class="component_wrap"></router-view> -->
    <router-view></router-view>
    <footer-component class="footer_mg"></footer-component>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    // name: 'HeaderPage',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style>
/* .component_wrap {
    width: 1920px;
    margin: 140px auto;
} */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

</style>
