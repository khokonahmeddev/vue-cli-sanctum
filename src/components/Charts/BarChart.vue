<template>
  <div class="Chart">
    <chart-bar :data="data" :height="data.height" :width="data.width" />
  </div>
</template>

<script>
import ChartBar from "./BarChart";
export default {
  name: "BarChart",

  components: { ChartBar },

  data() {
    return {
      data: {
        default: null,
      },
    };
  },
};
</script>
