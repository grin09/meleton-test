<template>
  <div>
    <EditAddPurchase :id="id" />
  </div>
</template>

<script>
const EditAddPurchase = () => import("@/components/EditAddPurchase");
export default {
  components: {
    EditAddPurchase,
  },
  data: function () {
    return {
      id: 0,
    };
  },
  created: function () {
    this.id = parseInt(this.$nuxt.$route.params.id);
  },
};
</script>
