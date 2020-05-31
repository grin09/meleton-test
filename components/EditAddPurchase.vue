<template>
  <div class="purchase-edit">
    <h1>
      <template v-if="id">Редактироватие</template>
      <template v-else>Добавление</template>
    </h1>
    <Input
      :val="item.title"
      key-field="title"
      @onChange="setField"
      caption="title"
    />
    <Input
      :val="item.price"
      key-field="price"
      @onChange="setField"
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
const Input = () => import("@/components/ui/Input");
export default {
  components: {
    Input,
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
