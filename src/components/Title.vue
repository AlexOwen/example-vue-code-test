<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
