<template>
  <div>
   <md-tabs class="md-primary" md-alignment="right">
      <md-tab id="tab-home" md-icon="home" md-label="หน้าแรก"></md-tab>
      <md-tab @click="openLogin"  id="tab-posts" md-icon="input" md-label="เข้าสู่ระบบ"></md-tab>
    </md-tabs>
     <md-dialog :md-active.sync="login">
      <md-dialog-title>เข้าสู่ระบบ</md-dialog-title>
      <div class="md-layout md-alignment-top-center">
        <div class="md-layout-item md-size-90" style="text-align:center;">
        <md-field>
          <label>อีเมล</label>
          <md-input v-focus v-model="email" placeholder="Email"></md-input>
        </md-field>
        <md-field>
          <label>รหัสผ่าน</label>
          <md-input v-model="password" placeholder="Password"></md-input>
        </md-field>
        </div>
      </div>
      <md-dialog-actions>
        <md-button @click="login = false">ยกเลิก</md-button>
        <md-button class="md-primary">ยืนยัน</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      login: false,
      email: '',
      password: ''
    }
  },
  methods: {
    openLogin() {
      this.login = true
    }
  }
}
</script>

<style scoped>

</style>
