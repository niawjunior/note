<template>
  <div>
    <md-toolbar class="md-primary" md-elevation="1">
        <div class="md-toolbar-section-start">
          <h3 style="cursor:pointer;" @click="home">โน๊ต</h3>
        </div>
      <div v-if="navLoad" class="md-toolbar-section-end">
        <md-button v-if="!isAuth" :to="{name: 'login'}">เข้าสู่ระบบ</md-button>
        <md-button v-if="isAuth" :to="{name: 'add'}">เพิ่มโน๊ต</md-button>
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
    },
    home() {
      this.$router.push({ name: '/' })
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
.router-link-exact-active {
  border: 1px solid !important;
}
</style>
