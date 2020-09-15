<template>
  <div id="my-spells">
    <div @click="setActive">
      <div class="media-body ml-1">
        <h3>{{spellData.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-spells",
  props: ["spellData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveSpell", this.spellData);
    },
    removeSpell() {},
  },
};
</script>

<style>
</style>