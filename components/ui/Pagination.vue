<template>
  <div class="pagination" v-show="isVisible">
    <div class="pagination__container">
      <template v-for="n in getPageQuantity">
        <span
          v-if="n === 1"
          class="pagination__item"
          :class="{ active: n === currentPage }"
          :key="n + 'left'"
          @click="setPage(n)"
          >{{ n }}</span
        >

        <div
          class="pagination__separator"
          v-if="currentPage > 3 && n === 1 && getPageQuantity > 6"
          :key="n + 'first_separator'"
        >
          <span class="pagination__separator__item"></span>
        </div>

        <span
          class="pagination__item"
          :class="{ active: n === currentPage }"
          v-if="
            (Math.abs(n - currentPage) <
              (currentPage !== 1 && currentPage !== getPageQuantity ? 2 : 3) ||
              getPageQuantity < 7) &&
            n !== 1 &&
            n !== getPageQuantity
          "
          :key="n + 'middle'"
          @click="setPage(n)"
          >{{ n }}</span
        >

        <div
          class="pagination__separator"
          v-if="
            currentPage < getPageQuantity - 2 &&
            n === getPageQuantity &&
            getPageQuantity > 6
          "
          :key="n + 'second_separator'"
        >
          <span class="pagination__separator__item"></span>
        </div>

        <span
          v-if="n == getPageQuantity"
          class="pagination__item"
          :class="{ active: n === currentPage }"
          :key="n + 'right'"
          @click="setPage(n)"
          >{{ n }}</span
        >
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageCount: Number,
    currentPage: Number,
    totalRecords: [String, Number],
  },
  data: function () {
    return {
      isVisible: false,
    };
  },
  methods: {
    setPage: function (page) {
      this.$emit("onPaginate", page);
    },
  },
  computed: {
    getPageQuantity: function () {
      this.isVisible = this.totalRecords > this.pageCount;

      return Math.ceil(this.totalRecords / this.pageCount);
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/ui/pagination.scss"></style>
