<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-70" style="margin-top:1rem;">
        <form  @submit.prevent="login">
          <md-field>
            <label>อีเมล</label>
            <md-icon>email</md-icon>
            <md-input v-validate="'required|email'" name="email" v-focus  v-model="email" placeholder="Email"></md-input>
          </md-field>
            <p>{{ errors.first('email') }}</p>
          <md-field>
            <label>รหัสผ่าน</label>
            <md-icon>lock</md-icon>
            <md-input type="password" v-validate="'required'" name="password" v-model="password" placeholder="Password"></md-input>
          </md-field>
            <p>{{ errors.first('password') }}</p>
          <div style="float:right">
          <md-button  type="submit" class="md-raised md-primary" :disabled="isDisabled || isEmpty || isClick">
            เข้าสู่ระบบ
          </md-button>
          </div>
        </form>
      </div>
    </div>
    <notifications group="foo" position="bottom right" animation-type="velocity"/>
  </div>
</template>
<script>

export default {
 data() {
   return {
     email: '',
     password: '',
     isEmpty: true,
     show: false,
     textDialog: 'error',
     isClick: false
   }
 },
 methods: {
   login() {
     this.isClick = true
     this.$store.dispatch('login', {
       email: this.email,
       password: this.password
     }).then(() => {
       this.isClick = false
       this.$notify({
          group: 'foo',
          type: 'success',
          title: 'แจ้งเตือน!',
          text: 'ยินดีต้อนรับ!',
          duration: 4000,
          speed: 1000
        })
        this.$router.push({ path: '/' })
     }).catch(e => {
       this.isClick = false
       if (e === 'auth/user-not-found' || e === 'auth/wrong-password') {
        this.$notify({
          group: 'foo',
          type: 'warn',
          title: 'แจ้งเตือน!',
          text: 'ชื่อ หรือ รหัสผ่าน ไม่ถูกต้อง!',
          duration: 4000,
          speed: 1000
        })
       } else {
         this.$notify({
          group: 'foo',
          type: 'warn',
          title: 'แจ้งเตือน!',
          text: 'มีบางอย่างผิดพลาด กรุณาลองใหม่อีกครั้ง',
          duration: 4000,
          speed: 1000
        })
       }
     })
   }
 },
 computed: {
   isDisabled() {
     let isInvalid = true;
     if (this.errors.has('email') || this.errors.has('password')) {
       isInvalid = true
     } else {
       isInvalid = false
     }
     return isInvalid
   },
   loginStatus() {
     let popup = false
     if (this.$store.getters.login) {
       if (this.$store.getters.login.status) {
         popup = false
       } else {
         popup = true
       }
     }
    return popup
   }
 }, 
 watch: {
   email() {
     if (this.email && this.password) {
       this.isEmpty = false
     }
   },
   password() {
     if (this.email && this.password) {
       this.isEmpty = false
     }
   }
 }
}
</script>

<style >
.vue-notification.warn {
  font-size: 16px;
}
.vue-notification.success {
  font-size: 16px;
}

.md-progress-spinner.md-theme-default .md-progress-spinner-circle {
    stroke: #ffffff !important;
}
.vue-notification-template {
  height: 70px;
  width: 250px;
}
.notification-content {
  margin-top: 10px;
}
.notifications {
  right: -40px !important;
}
</style>
