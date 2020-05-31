<template>
  <div>
    <PurchaseItem
      v-for="item in list(pageCount, currentPage)"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
const PurchaseItem = () => import("@/components/PurchaseItem");
export default {
  name: "PurchaseList",
  components: {
    PurchaseItem,
  },
  props: {
    pageCount: Number,
    currentPage: Number,
  },
  computed: {
    ...mapGetters({
      list: "list/getListPage",
      sort_direction: "sorting/sort_direction",
      sort_field: "sorting/sort_field",
    }),
  },
  methods: {
    ...mapMutations({
      sortBy: "list/sortBy",
    }),
  },
  mounted: function () {
    this.sortBy({ field: this.sort_field, direction: this.sort_direction });
  },
};
</script>
