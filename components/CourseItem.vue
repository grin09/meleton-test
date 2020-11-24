<template>
  <div class="course-item">
    <div class="course-item__box">
      <nuxt-link
        :to="{ name: 'courses-id', params: { id: item.id } }"
        class="title"
      >
        {{ item.title }}
      </nuxt-link>
      <span class="date">{{ item.created_at }}</span>
      <div class="description">
        {{ item.description }}
      </div>
      <span class="price">{{ item.cost }} RUB</span>
    </div>
    <div class="course-item__box right">
      <nuxt-link
        :to="{ name: 'courses-id-edit', params: { id: item.id } }"
        class="button button--grey"
      >
        Edit
      </nuxt-link>
      <button class="button button--red" @click="removeItem(item.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CourseItem',
  props: {
    item: {
      type: Object,
      default () { return {} }
    }
  },
  methods: mapMutations({
    removeItem: 'list/removeItemById'
  })
}
</script>

<style lang="scss" src="@/assets/styles/course-item.scss"></style>
