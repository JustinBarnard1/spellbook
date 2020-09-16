<template>
  <div id="my-spells">
    <div>
      <div class="media-body ml-1">
        <h3 @click="setMyActive">{{spellData.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-spells",
  props: ["spellData"],
  methods: {
    setMyActive() {
      this.$store.dispatch("setMyActiveSpell", this.spellData);
    },
  },
};
</script>

<style>
</style>