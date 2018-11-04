<template>
  <div id="app">
    <p>main page</p>
    <Editor/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Editor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
