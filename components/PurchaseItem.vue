<template>
  <div class="purchase-item">
    <div class="purchase-item__box">
      <nuxt-link
        :to="{ name: 'list-id', params: { id: item.id } }"
        class="title"
        >{{ item.title }}</nuxt-link
      >
      <span class="date">{{ item.created_at }}</span>
      <div class="description" v-html="item.description"></div>
      <span class="price">{{ item.cost }} RUB</span>
    </div>
    <div class="purchase-item__box right">
      <nuxt-link
        :to="{ name: 'list-id-edit', params: { id: item.id } }"
        class="button button--grey"
        >Edit</nuxt-link
      >
      <button class="button button--red" @click="removeItem(item.id)">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PurchaseItem",
  props: {
    item: Object,
  },
  methods: mapMutations({
    removeItem: "list/removeItemById",
  }),
};
</script>

<style lang="scss" src="@/assets/styles/purchase-item.scss"></style>
