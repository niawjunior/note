<template>
  <div>
    <div v-if="tags && tags.length !== 0">
      <div v-for="(tag, index) in tags" :key="index" class="tag">
      <md-chip class="md-accent" md-clickable>{{ tag.tag }} ({{ tag.count}})</md-chip>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    tags() {
      return this.$store.getters.tag
    }
  }
}
</script>

<style scoped>
  .tag {
    padding:.2rem;
    display: inline-block;
  }
</style>
