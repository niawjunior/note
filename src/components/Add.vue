<template>
  <div>
    <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-70" style="margin-top:1rem;">
        <form  @submit.prevent="addNote">
          <md-field>
            <label>ชื่อโน๊ต</label>
            <md-icon>font_download</md-icon>
            <md-input type="text" v-validate="'required'" name="note" v-focus  v-model="note.note" placeholder="note"></md-input>
          </md-field>
            <p>{{ errors.first('note') }}</p>
          <md-field>
            <label>คำอธิบาย</label>
            <md-icon>description</md-icon>
            <md-input type="text" name="description" v-model="note.description" placeholder="description"></md-input>
          </md-field>
          <label>หมวดหมู่</label>
          <div>
              <md-checkbox v-model="note.tag" value="Web">Web</md-checkbox>
              <md-checkbox v-model="note.tag" value="JavaScript">JavaScript</md-checkbox>
              <md-checkbox v-model="note.tag" value="Angular">Angular</md-checkbox>
              <md-checkbox v-model="note.tag" value="Vue.js">Vue.js</md-checkbox>
              <md-checkbox v-model="note.tag" value="Framework">Framework</md-checkbox>
              <md-checkbox v-model="note.tag" value="Library">Library</md-checkbox>
              <md-checkbox v-model="note.tag" value="Tip">Tip</md-checkbox>
              <md-checkbox v-model="note.tag" value="Technology">Technology</md-checkbox>
              <p v-if="note.tag.length === 0 && tagClick">The tag field is required.</p>
          </div>
          <label>ประเภท</label>
          <div>
              <md-checkbox v-model="note.category" value="Course">Course (Video)</md-checkbox>
              <md-checkbox v-model="note.category" value="Article">Article</md-checkbox>
              <md-checkbox v-model="note.category" value="Thai">Thai</md-checkbox>
              <md-checkbox v-model="note.category" value="Free">Free</md-checkbox>
              <p v-if="note.category.length === 0 && categoryClick">The category field is required.</p>
          </div>
           <md-field>
            <label>ลิงค์ (url)</label>
            <md-icon>link</md-icon>
            <md-input type="text" v-validate="'required'" name="url" v-model="note.url" placeholder="url"></md-input>
          </md-field>
            <p>{{ errors.first('url') }}</p>
          <md-button  type="submit" class="md-raised md-primary">
            เพิ่มโน๊ต
          </md-button>
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
      note: {
        note: '',
        description: '',
        tag: [],
        category: [],
        url: ''
      },
        tagClick: null,
        categoryClick: null,
    }
  },
  watch: {
    tag() {
      this.tagClick = true
    },
    category() {
      this.categoryClick = true
    }
  },
  methods: {
    addNote() {
      this.$store.dispatch('addNote', {
        name: this.note.note,
        description: this.note.description || '',
        tag: this.note.tag,
        category: this.note.category,
        url: this.note.url,
        createdAt: Date.now()
      }).then(() => {
         this.$notify({
          group: 'foo',
          type: 'success',
          title: 'แจ้งเตือน!',
          text: 'เพิ่มโน๊ตสำเร็จ!',
          duration: 4000,
          speed: 1000
        })
        this.note.note = ''
        this.note.description = ''
        this.note.tag = []
        this.note.category = []
        this.note.url = ''
        this.tagClick = null,
        this.categoryClick = null
      })
    }
  }
}
</script>

<style scoped>

</style>
