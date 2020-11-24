<template>
  <div v-if="itemById" class="course-view">
    <h1>{{ itemById.title }}</h1>
    <span class="date">{{ itemById.created_at }}</span>
    <div class="description">
      {{ itemById.description }}
    </div>
    <strong class="price">{{ itemById.cost }} RUB</strong>
    <div class="course-view__footer">
      <nuxt-link
        :to="{ name: 'courses' }"
        class="button button--grey"
      >
        Back
      </nuxt-link>
      <nuxt-link
        :to="{ name: 'courses-id-edit', params: { id: itemById.id } }"
        class="button button--grey"
      >
        Edit
      </nuxt-link>
      <button class="button button--red" @click="deleteItem">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getListItem: 'list/getListItem'
    }),
    itemById () {
      const item = { ...this.getListItem(this.id) }
      if (!item.id) { this.redirectToList() }
      return item
    }
  },
  created () {
    this.id = this.$nuxt.$route.params.id
  },
  methods: {
    ...mapMutations({
      removeItem: 'list/removeItemById'
    }),
    deleteItem () {
      this.removeItem(this.id)
      this.$nuxt.$router.push({ name: 'courses' })
    },
    redirectToList () {
      this.$nuxt.$router.push({ name: 'courses' })
    }
  }

}
</script>

<style lang="scss" src="@/assets/styles/course-view.scss"></style>
