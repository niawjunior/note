<template>
  <div>
    {{ getNote }}
     <md-table>
      <md-table-row>
        <md-table-head>วันที่/เวลา</md-table-head>
        <md-table-head>ชื่อโน๊ต</md-table-head>
        <md-table-head>คำอธิบาย</md-table-head>
        <md-table-head>หมวดหมู่</md-table-head>
        <md-table-head>ประเภท</md-table-head>
        <md-table-head>ลิ้งค์</md-table-head>
      </md-table-row>
      <md-table-row>
        <md-table-cell>02/06/2019 12:32</md-table-cell>
        <md-table-cell>JavaScript พื้นฐาน</md-table-cell>
        <md-table-cell>สอนเขียน JavaScript</md-table-cell>
        <md-table-cell>JavaScript</md-table-cell>
        <md-table-cell>บทความ</md-table-cell>
        <md-table-cell><a href="www.google.com">www.google.com</a></md-table-cell>
      </md-table-row>
      <md-table-row>
        <md-table-cell>04/06/2019 09:10</md-table-cell>
        <md-table-cell>Angular พื้นฐาน</md-table-cell>
        <md-table-cell>สอนเขียน Angular</md-table-cell>
        <md-table-cell>Angular</md-table-cell>
        <md-table-cell>วีดีโอ</md-table-cell>
        <md-table-cell><a href="www.youtube.com">www.youtube.com</a></md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>

export default {
  computed: {
    getNote() {
      return this.$store.state.notes
    }
  },
  created() {
    this.$store.dispatch('getNote')
  }
}
</script>

<style scoped>

</style>
