<template>
  <div id="allSpells">
    <div @click="setActive">
      <div class="media-body ml-1">
        <h3>{{spellData.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "all-spells",
  props: ["spellData"],
  data() {
    return {};
  },
  methods: {
    setActive() {
      this.$store.dispatch("setActiveSpell", this.spellData);
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style>
</style>