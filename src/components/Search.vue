<template>
  <div>
    <md-field>
      <label>ค้นหา</label>
      <md-input v-model="search"  placeholder="พิมพ์คำที่คุณต้องการค้นหา.."></md-input>
      <md-icon style="cursor:pointer">search</md-icon>
    </md-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search() {
      this.$store.dispatch('search', this.search)
    }
  }
}
</script>

<style scoped>

</style>
