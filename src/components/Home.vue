<template>
  <div>
    <Nav/>
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-60" style="text-align:center;">
      <Search/>
      <Tags/>
      </div>
    </div>
    <div class="md-layout md-alignment-top-center">
    <div class="md-layout-item md-size-90" style="margin-top:1rem;">
      <Note/>
    </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'
import Note from './Note.vue'
import Search from './Search.vue'
import Tags from './Tags.vue'

export default {
  components: {
    Nav,
    Note,
    Search,
    Tags
  }
}
</script>

<style scoped>

</style>
