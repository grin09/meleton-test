<template>
  <div class="course-edit">
    <h1>{{ pageTitle }}</h1>
    <InputText
      v-model="item.title"
      :value="item.title"
      caption="Title"
    />
    <InputText
      v-model="item.description"
      :value="item.description"
      caption="Description"
    />
    <InputText
      v-model="item.cost"
      :value="item.cost"
      caption="Cost"
    />
    <div class="course-edit__footer">
      <button class="button button--green" @click="save">
        Save
      </button>
      <button class="button button--grey" @click="cancelEditAdd">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
const InputText = () => import('@/components/ui/InputText')
export default {
  components: { InputText },
  props: {
    id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      item: {
        title: '',
        cost: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      getListItem: 'list/getListItem'
    }),
    pageTitle () {
      return this.id ? 'Edit' : 'Add'
    }
  },
  mounted () {
    if (this.id) {
      this.item = { ...this.getListItem(this.id) }
    }
  },
  methods: {
    ...mapMutations({
      saveItem: 'list/saveItem'
    }),
    cancelEditAdd () {
      this.$nuxt.$router.push({ name: 'list' })
    },
    save () {
      this.saveItem(this.item)
      this.cancelEditAdd()
    },
    setField (field) {
      this.item[field.key] = field.value
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/course-edit.scss"></style>
