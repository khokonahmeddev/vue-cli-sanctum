<template>
  <bar-chart v-if="type === 'bar-chart'" :data="$props" />
</template>

<script>
import BarChart from "./BarChart";
export default {
  name: "Index",
  components: {
    BarChart,
  },
  props: {
    type: {
      required: true,
      type: String,
    },
    labels: {
      type: Array,
    },
    dataSets: {
      type: Array,
    },
    height: {
      type: Number,
      default: 400,
    },
    width: {
      type: Number,
      default: 600,
    },
    withoutDecimalPoint: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
