<template>
  <div class="input-component">
    <input
      :type="type"
      :class="['field', { 'non-empty': value }]"
      :value="value"
      @input="onChange"
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
    value: {
      type: String,
      required: false,
    },
  },
  methods: {
    onChange(e) {
      this.$emit('input', e.target.value)
    }
  },
};
</script>

<style lang="scss" src="@/assets/styles/ui/input.scss"></style>
