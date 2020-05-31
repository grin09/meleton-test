<template>
  <div class="input-component">
    <input
      :type="type"
      :class="['field', { 'non-empty': value }]"
      @change="change"
      v-model="value"
    />
    <span class="caption">{{ caption }}</span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    caption: {
      type: String,
      required: false,
    },
    val: {
      type: String,
      required: false,
    },
    keyField: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      value: "",
    };
  },
  methods: {
    change: function () {
      this.$emit("onChange", {
        value: this.value,
        key: this.keyField,
      });
    },
  },
  watch: {
    val: {
      immediate: true,
      handler: function () {
        if (this.val) {
          this.value = this.val;
        }
      },
    },
  },
};
</script>

<style lang="scss" src="@/assets/styles/ui/input.scss"></style>
