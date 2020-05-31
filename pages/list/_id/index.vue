<template>
  <div class="purchase-view" v-if="itemById">
    <h1>{{ itemById.title }}</h1>
    <span class="date">{{ itemById.datetime }}</span>
    <strong class="price">{{ itemById.price }} USD</strong>
    <div class="purchase-view__footer">
      <nuxt-link :to="{ name: 'list' }" class="button button--grey"
        >Вернуться</nuxt-link
      >
      <button @click="deleteItem" class="button button--red">Удалить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters({
      getListItem: "list/getListItem",
    }),
    itemById: function () {
      let item = { ...this.getListItem(this.id) };
      if (!item.id) {
        this.$nuxt.$router.push({ name: "list" });
      }
      item.datetime = `${new Date(
        item.datetime
      ).toLocaleDateString()} ${new Date(item.datetime).toLocaleTimeString()}`;
      return item;
    },
  },
  data: function () {
    return {
      id: 0,
    };
  },
  methods: {
    ...mapMutations({
      removeItem: "list/removeItemById",
    }),
    deleteItem: function () {
      this.removeItem(this.id);
      this.$nuxt.$router.push({ name: "list" });
    },
  },
  created: function () {
    this.id = this.$nuxt.$route.params.id;
  },
};
</script>

<style lang="scss" src="@/assets/styles/purchase-view.scss"></style>
