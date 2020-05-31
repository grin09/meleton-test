<template>
  <div class="purchase-item">
    <div class="purchase-item__box">
      <nuxt-link
        :to="{ name: 'list-id', params: { id: item.id } }"
        class="title"
        >{{ item.title }}</nuxt-link
      >
      <span class="date">{{ humanizeDatetime(item.datetime) }}</span>
      <span class="price">{{ item.price }} USD</span>
    </div>
    <div class="purchase-item__box right">
      <nuxt-link
        :to="{ name: 'list-id-edit', params: { id: item.id } }"
        class="button button--grey"
        >Редактировать</nuxt-link
      >
      <button class="button button--red" @click="removeItem(item.id)">
        Удалить
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
  methods: {
    humanizeDatetime: function (datetime) {
      return `${new Date(datetime).toLocaleDateString()} ${new Date(
        datetime
      ).toLocaleTimeString()}`;
    },
    ...mapMutations({
      removeItem: "list/removeItemById",
    }),
  },
};
</script>

<style lang="scss" src="@/assets/styles/purchase-item.scss"></style>
