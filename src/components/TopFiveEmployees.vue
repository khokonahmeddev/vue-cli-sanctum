<template>
  <div class="container mt-3">
    <h4 class="mb-3">Top Five Employees</h4>
    <table class="table">
      <thead>
        <tr>
          <th>SL</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employeeList" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <template v-if="employee.user">
              {{ employee.user.name }}

              ({{ employee.total_working_hour }})
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "topFiveEmployee",
  data() {
    return {
      employeeList: [],
    };
  },
  computed: {
    //  moment(item.in_time, "DD/MM/YYYY HH:mm:ss")
    //       .diff(moment(item.out_time, "DD/MM/YYYY HH:mm:ss"))
    //       .format("HH:mm:ss");
    // diffDate() {
    //   return this.employeeList.map((item) =>
    //     moment(item.in_time, "YYYY-MM-DD HH:mm:ss")
    //       .diff(moment(item.out_time, "YYYY-MM-DD HH:mm:ss"))
    //       .format("HH:mm:ss")
    //   );
    // },
  },
  methods: {
    getTopFiveEmployee() {
      axios.get(`http://127.0.0.1:8000/api/top-five-average-working-hour`).then((response) => {
        this.employeeList = response.data;
      });
    },
  },

  created() {
    this.getTopFiveEmployee();
  },
};
</script>
