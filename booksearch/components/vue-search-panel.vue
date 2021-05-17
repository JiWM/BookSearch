<template>
  <div class="demo-comp">
    <button @click="onOpen">Open Panel</button>
    <div>Selected: {{ selected }}</div>
    <vue-search-panel
      v-model="value"
      :fetch-suggestions="getSuggestions"
      @select="onSelect"
      ref="searchPanel"
    >
    </vue-search-panel>
  </div>
</template>

<script>
import VueSearchPanel from "vue-search-panel";
const testData = [
  { key: "test-data-1", value: "test data 1" },
  { key: "test-data-2", value: "test data 2" },
  { key: "test-data-3", value: "test data 3" }
];

export default {
  name: "DemoComp",
  data() {
    return {
      value: "",
      selected: ""
    };
  },
  methods: {
    onOpen() {
      this.$refs.searchPanel.show();
    },
    onSelect(item) {
      this.selected = item.value;
    },
    getSuggestions(query, cb) {
      cb(
        query
          ? testData.filter(item => {
              return item.value.includes(query);
            })
          : testData
      );
    }
  },
  components: { VueSearchPanel }
};
</script>
