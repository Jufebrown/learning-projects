<template>
  <div class="editor">
    <p>editor loaded</p>
    <RichTextBox/>
  </div>
</template>

<script>
  import RichTextBox from './RichTextBox.vue'

  export default {
    name: 'Editor',
    components: {
      RichTextBox
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
