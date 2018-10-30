<template>
  <div class="home">
    <editor v-model="model"></editor>
  </div>
</template>

<script>
  // @ is an alias to /src
  import editor from '@/components/QuillEditor.vue';

  export default {
    name: 'home',
    components: {
      editor,
    },
  };
</script>
