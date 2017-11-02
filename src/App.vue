<template>
  <div id="app">
    <router-link to="/foo">to foo</router-link>
    <router-link to="/bar">to bar</router-link>
    <router-link to="/">back</router-link>
    <router-link to="/hello">to hello</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #CC9966;
}
</style>
