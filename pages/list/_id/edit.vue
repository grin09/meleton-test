<template>
  <div>
    <EditAddCourse :id="id" />
  </div>
</template>

<script>
const EditAddCourse = () => import('@/components/EditAddCourse')
export default {
  components: {
    EditAddCourse
  },
  data () {
    return {
      id: 0
    }
  },
  created () {
    this.id = parseInt(this.$nuxt.$route.params.id)
  }
}
</script>
