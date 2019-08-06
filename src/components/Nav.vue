<template>
  <div>

    
    <md-toolbar class="md-primary" md-elevation="1">
        <div class="md-toolbar-section-start">
          <md-button to="/">โน๊ต</md-button>
        </div>
      <div v-if="navLoad" class="md-toolbar-section-end">
        <md-button v-if="!isAuth" to="/login">เข้าสู่ระบบ</md-button>
        <md-button v-if="isAuth" to="/add">เพิ่มโน๊ต</md-button>
        <md-button v-if="isAuth" to=""  @click="logout">ออกจากระบบ</md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<script> 
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ path: 'login' })
      })
    }
  },
  computed: {
    isAuth() {
    return this.$store.getters.login
    },
    navLoad() {
      return this.$store.state.load
    }
  }
}
</script>

<style>
.md-tabs-indicator {
    height: 5px !important;
}
</style>
