<template>
  <div class="purchase-edit">
    <h1>{{ pageTitle }}</h1>
    <InputText
      :value="item.title"
      v-model="item.title"
      caption="title"
    />
    <InputText
      :value="item.price"
      v-model="item.price"
      caption="price"
    />
    <div class="purchase-edit__footer">
      <button @click="save" class="button button--green">
        Сохранить
      </button>
      <button @click="cancelEditAdd" class="button button--grey">
        Отменить
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
const InputText = () => import("@/components/ui/InputText");
export default {
  components: { Input, InputText
  },
  props: {
    id: Number,
  },
  data: function () {
    return {
      item: {
        title: "",
        price: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      getListItem: "list/getListItem",
    }),
    pageTitle() {
      return this.id ? "Edit" : "Add"
    }
  },
  methods: {
    ...mapMutations({
      saveItem: "list/saveItem",
    }),
    cancelEditAdd: function () {
      this.$nuxt.$router.push({ name: "list" });
    },
    save: function () {
      this.saveItem(this.item);
      this.cancelEditAdd();
    },
    setField: function (field) {
      this.item[field.key] = field.value;
    },
  },
  mounted: function () {
    if (this.id) {
      this.item = { ...this.getListItem(this.id) };
    }
  },
};
</script>

<style lang="scss" src="@/assets/styles/purchase-edit.scss"></style>
