<template>
  <div v-show="isVisible" class="pagination">
    <div class="pagination__container">
      <template v-for="n in getPageQuantity">
        <span
          v-if="n === 1"
          :key="n + 'left'"
          class="pagination__item"
          :class="{ active: n === currentPage }"
          @click="setPage(n)"
        >{{ n }}</span>

        <div
          v-if="currentPage > 3 && n === 1 && getPageQuantity > 6"
          :key="n + 'first_separator'"
          class="pagination__separator"
        >
          <span class="pagination__separator__item" />
        </div>

        <span
          v-if="
            (Math.abs(n - currentPage) <
              (currentPage !== 1 && currentPage !== getPageQuantity ? 2 : 3) ||
              getPageQuantity < 7) &&
              n !== 1 &&
              n !== getPageQuantity
          "
          :key="n + 'middle'"
          class="pagination__item"
          :class="{ active: n === currentPage }"
          @click="setPage(n)"
        >{{ n }}</span>

        <div
          v-if="
            currentPage < getPageQuantity - 2 &&
              n === getPageQuantity &&
              getPageQuantity > 6
          "
          :key="n + 'second_separator'"
          class="pagination__separator"
        >
          <span class="pagination__separator__item" />
        </div>

        <span
          v-if="n == getPageQuantity"
          :key="n + 'right'"
          class="pagination__item"
          :class="{ active: n === currentPage }"
          @click="setPage(n)"
        >{{ n }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageCount: {
      type: Number,
      default: 4
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalRecords: {
      type: [String, Number],
      default: 0
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    getPageQuantity () {
      return Math.ceil(this.totalRecords / this.pageCount)
    }
  },
  watch: {
    isVisible () {
      this.isVisible = this.totalRecords > this.pageCount
    }
  },
  methods: {
    setPage (page) {
      this.$emit('onPaginate', page)
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/ui/pagination.scss"></style>
