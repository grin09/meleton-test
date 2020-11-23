<template>
  <div class="purchase-filter">
    <div class="purchase-filter__field">
      <nuxt-link :to="{ name: 'list-add' }" class="button button--green"
        >Add</nuxt-link
      >
    </div>
    <div class="purchase-filter__field sort">
      <span class="caption">Sort by: </span>
      <select @change="sort" v-model="field" class="field-select">
        <option value=""></option>
        <option value="datetime">По дате</option>
        <option value="price">По цене</option>
      </select>
      <i @click="toggleSortDirection" class="sort-direction">
        <svg
          style="width: 24px; height: 24px;"
          viewBox="0 0 24 24"
        >
          <path v-if="sort_direction == 'DESC'"
            fill="currentColor"
            d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
          />
          <path v-else
            fill="currentColor"
            d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
          />
        </svg>
      </i>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "PurchaseFilter",
  data: function () {
    return {
      field: "",
    };
  },
  computed: mapGetters({
    sort_direction: "sorting/sort_direction",
    sort_field: "sorting/sort_field",
  }),
  methods: {
    ...mapMutations({
      sortBy: "list/sortBy",
      setSortDirection: "sorting/setSortDirection",
      setSortField: "sorting/setSortField",
    }),
    toggleSortDirection() {
      this.sort_direction == "ASC"
        ? this.setSortDirection("DESC")
        : this.setSortDirection("ASC");
      this.sortBy({ field: this.sort_field, direction: this.sort_direction });
    },
    sort() {
      this.setSortField(this.field);
      this.sortBy({ field: this.sort_field, direction: this.sort_direction });
    },
  },
  mounted: function () {
    this.field = this.sort_field;
  },
};
</script>

<style lang="scss" src="@/assets/styles/purchase-filter.scss"></style>
