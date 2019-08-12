<template>
  <div>
    <div v-if="tags && tags.length !== 0">
      <div v-for="(tag, index) in tags" :key="index" class="tag">
        <md-checkbox v-model="checkTag" :value="tag.tag">{{ tag.tag }} ({{ tag.count}})</md-checkbox>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      checkTag: []
    }
  },
  computed: {
    tags() {
      return this.$store.getters.tag
    }
  },
  methods: {
  },
  watch: {
    checkTag() {
      this.$store.dispatch('searchByTag', this.checkTag)
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
