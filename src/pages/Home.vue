<template>
  <div id="home">
    <div class="row">
      <div class="col-3 card">
        <api-spells v-for="spell in allSpells" :key="spell.name" :spellData="spell" />
      </div>
      <div class="col-6 card">
        <active-spell />
      </div>
      <div class="col-3 card">
        <my-spells v-for="spell in mySpells" :key="spell.name" :spellData="spell" />
      </div>
    </div>
  </div>
</template>

<script>
import ApiSpells from "../components/ApiSpells.vue";
import ActiveSpell from "../components/ActiveSpell.vue";
import MySpells from "../components/MySpells.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getApiSpells");
    this.$store.dispatch("getMySpells");
  },
  methods: {},
  computed: {
    mySpells() {
      return this.$store.state.mySpells;
    },
    allSpells() {
      return this.$store.state.apiSpells;
    },
  },
  components: {
    ApiSpells,
    ActiveSpell,
    MySpells,
  },
};
</script>

<style>
</style>