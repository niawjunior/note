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
        <md-table-cell>{{ item.createdAt | date('DD/MM/YYYY HH:mm') }}</md-table-cell>
        <md-table-cell :title="item.name">{{ subName(item.name) }}</md-table-cell>
        <md-table-cell>{{ item.description || '-'}}</md-table-cell>
        <md-table-cell>{{ item.tag.toString() }}</md-table-cell>
        <md-table-cell>{{ item.category.toString() }}</md-table-cell>
        <md-table-cell><a target="_blank" :href="item.url"><md-icon>link</md-icon></a></md-table-cell>
      </md-table-row>
    </md-table>
      <!-- <div v-if="note && note.length !== 0" class="md-layout md-alignment-top-center">
          <md-button class="md-raised md-primary">ดูทั้งหมด</md-button>
      </div> -->
      <div v-if="!note" style="text-align:center;">
        <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
      </div>
  </div>
</template>

<script>
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
    subName(name) {
      return name.length >50 ? name.substr(0,50) + '..' : name
    }
  }
}
</script>

<style>
.md-progress-spinner {
    margin: 24px;
  }
</style>
