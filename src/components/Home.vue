<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-50">
        <Search/>
        <Tags/>
      </div>
    </div>
    <div class="md-layout md-alignment-top-center" style="margin-bottom:2rem;">
      <div class="md-layout-item md-size-90" style="margin-top:1rem;margin-bottom:1rem;">
        <Note/>
      </div>
    </div>
  </div>
</template>

<script>
import Note from './Note.vue'
import Search from './Search.vue'
import Tags from './Tags.vue'

export default {
  components: {
    Note,
    Search,
    Tags
  }
}
</script>

<style scoped>

</style>
