<template>
    <h1>{{ title }}</h1>
</template>

<script>
/**
 * An H1 title.
 * This was made to remind me how to use Vue.js and is probably too granular for production.
 */
export default {
  name: 'Title',
  props: {
    /**
     * The text to display in the title
     */
    title: String,
  },
};
</script>
