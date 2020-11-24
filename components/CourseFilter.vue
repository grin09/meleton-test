<template>
  <div class="course-filter">
    <div class="course-filter__field">
      <nuxt-link :to="{ name: 'courses-add' }" class="button button--green">
        Add
      </nuxt-link>
    </div>
    <div class="course-filter__field sort">
      <span class="caption">Sort by: </span>
      <select v-model="field" class="field-select" @change="sort">
        <option value="" />
        <option value="created_at">
          By date
        </option>
        <option value="cost">
          By cost
        </option>
      </select>
      <i class="sort-direction" @click="toggleSortDirection">
        <svg
          style="width: 24px; height: 24px;"
          viewBox="0 0 24 24"
        >
          <path
            v-if="sort_direction == 'DESC'"
            fill="currentColor"
            d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
          />
          <path
            v-else
            fill="currentColor"
            d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
          />
        </svg>
      </i>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'CourseFilter',
  data () {
    return {
      field: ''
    }
  },
  computed: mapGetters({
    sort_direction: 'sorting/sort_direction',
    sort_field: 'sorting/sort_field'
  }),
  mounted () {
    this.field = this.sort_field
  },
  methods: {
    ...mapMutations({
      sortBy: 'list/sortBy',
      setSortDirection: 'sorting/setSortDirection',
      setSortField: 'sorting/setSortField'
    }),
    toggleSortDirection () {
      this.sort_direction === 'ASC'
        ? this.setSortDirection('DESC')
        : this.setSortDirection('ASC')
      this.sortBy({ field: this.sort_field, direction: this.sort_direction })
      this.$emit('onPaginate', 1)
    },
    sort () {
      this.setSortField(this.field)
      this.sortBy({ field: this.sort_field, direction: this.sort_direction })
      this.$emit('onPaginate', 1)
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/course-filter.scss"></style>
