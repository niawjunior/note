<template>
  <div>
     <md-table>
      <md-table-row v-if="note && note.length !== 0">
        <md-table-head>วันที่/เวลา</md-table-head>
        <md-table-head>ชื่อโน๊ต</md-table-head>
        <md-table-head>คำอธิบาย</md-table-head>
        <md-table-head>หมวดหมู่</md-table-head>
        <md-table-head>ประเภท</md-table-head>
        <md-table-head>ลิ้งค์</md-table-head>
      </md-table-row>
      <md-table-row v-for="(item, index) in note" :key="index">
        <md-table-cell>{{ moment(item.createdAt)}}</md-table-cell>
        <md-table-cell>{{ item.name.substr(0,50) }}</md-table-cell>
        <md-table-cell>{{ item.description || '-'}}</md-table-cell>
        <md-table-cell>{{ item.tag.toString() }}</md-table-cell>
        <md-table-cell>{{ item.category.toString() }}</md-table-cell>
        <md-table-cell><a target="_blank" :href="item.url">{{ item.url.substr(0, 30) }}..</a></md-table-cell>
      </md-table-row>
    </md-table>
      <div v-if="!note" style="text-align:center;">
        <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
      </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  computed: {
    note() {
      return this.$store.state.notes
    }
  },
  created() {
    this.$store.dispatch('getNote')
  },
  methods: {
    moment(date) {
      return moment(Number(date)).format('DD/MM/YYYY HH:mm')
    }
  }
}
</script>

<style>
.md-progress-spinner {
    margin: 24px;
  }
</style>
