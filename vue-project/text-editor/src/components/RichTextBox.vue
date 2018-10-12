<template>
  <div class="richTextBox">
    <p>textbox loaded</p>
    <iframe name="textBox"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'RichTextBox',
    methods: {
      enableEditMode () {
        textBox.document.designMode = 'on';
      }
    },
    beforemount() {
      this.enableEditMode()
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
