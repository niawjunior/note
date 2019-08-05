<template>
  <div>
   <md-tabs md-sync-route class="md-primary" md-alignment="right">
      <md-tab  to="/" exact id="tab-home" md-icon="home" md-label="หน้าแรก"></md-tab>
      <md-tab  to="/Login"  id="tab-posts" md-icon="input" md-label="เข้าสู่ระบบ"></md-tab>
    </md-tabs>
  </div>
  
</template>

<script>
export default {
}
</script>

<style>
.md-tabs-indicator {
    height: 5px !important;
}
</style>
