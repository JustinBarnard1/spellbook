<template>
  <div id="spell-details">
    <div class="card" v-if="apiSpells.name">
      <div class="card-body">
        <h4 class="card-title">{{apiSpells.name}}</h4>
        <p class="card-text">Components: {{apiSpells.components}}</p>
        <p class="card-text">Range: {{apiSpells.range}}</p>
        <p class="card-text">Duration: {{apiSpells.duration}}</p>
        <p class="card-text">Description: {{apiSpells.desc}}</p>
        <button @click="addSpell" v-if="!apiSpells._id" class="btn btn-success">Add Spell</button>
        <button @click="removeSpell" v-else class="btn btn-danger">Remove Spell</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    apiSpells() {
      return this.$store.state.activeSpell;
    },
  },
  methods: {
    addSpell() {
      let newSpell = {
        name: this.apiSpells.name,
        components: this.apiSpells.components,
        description:
          this.apiSpells.description || this.apiSpells.desc.toString(),
        range: this.apiSpells.range,
        duration: this.apiSpells.duration,
      };
      this.$store.dispatch("addSpell", newSpell);
    },
    removeSpell() {
      this.$store.dispatch("removeSpell", this.apiSpells._id);
    },
  },
};
</script>

<style>
</style>