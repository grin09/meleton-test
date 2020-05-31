<template>
  <div class="purchase-list">
    <PurchaseFilter />
    <PurchaseList :pageCount="pageCount" :currentPage="currentPage" />
    <Pagination
      @onPaginate="onPaginate"
      :pageCount="pageCount"
      :totalRecords="totalRecords"
      :currentPage="currentPage"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
const PurchaseFilter = () => import("@/components/PurchaseFilter");
const PurchaseList = () => import("@/components/PurchaseList");
const Pagination = () => import("@/components/ui/Pagination");
export default {
  components: {
    PurchaseFilter,
    PurchaseList,
    Pagination,
  },
  computed: {
    ...mapGetters({
      totalRecords: "list/getListLength",
    }),
  },
  data: function () {
    return {
      currentPage: 1,
      pageCount: 2,
      filterValue: "",
    };
  },
  methods: {
    onPaginate: function (page) {
      this.currentPage = page;
    },
  },
};
</script>
