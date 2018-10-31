<template>
  <div class="home">
    <div id="app">
      <quill-editor ref="myTextEditor" v-model="content" :config="editorOption">
      </quill-editor>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { quillEditor } from 'vue-quill-editor'

export default {
  data () {
    return {
      name: 'app',
      content: '<h2>Example</h2>',
      editorOption: {}
    }
  },
  name: 'home',
  components: {
    quillEditor
  }
}
</script>

<style>
  @import '../../node_modules/quill/dist/quill.snow.css';
</style>
