<template>
  <div class="course-list">
    <CourseFilter @onPaginate="onPaginate" />
    <CourseItem
      v-for="item in list(pageCount, currentPage)"
      :key="item.id"
      :item="item"
    />
    <Pagination
      :page-count="pageCount"
      :total-records="totalRecords"
      :current-page="currentPage"
      @onPaginate="onPaginate"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
const CourseFilter = () => import('@/components/CourseFilter')
const CourseItem = () => import('@/components/CourseItem')
const Pagination = () => import('@/components/ui/Pagination')
export default {
  components: {
    CourseFilter,
    CourseItem,
    Pagination
  },
  data () {
    return {
      currentPage: 1,
      pageCount: 4,
      filterValue: ''
    }
  },
  computed: mapGetters({
    list: 'list/getListPage',
    sort_direction: 'sorting/sort_direction',
    sort_field: 'sorting/sort_field',
    totalRecords: 'list/getListLength'
  }),
  mounted () {
    this.sortBy({ field: this.sort_field, direction: this.sort_direction })
  },
  methods: {
    ...mapMutations({
      sortBy: 'list/sortBy'
    }),
    onPaginate (page) {
      this.currentPage = page
    }
  }
}
</script>
