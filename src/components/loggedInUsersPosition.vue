<template>
  <div class="container mt-3">
    <h4 class="mb-3">Logged In Users Position</h4>
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
  name: "loggedInUsersPosition",
  data() {
    return {
      employeeList: [],
    };
  },
  methods: {
    getTopFiveEmployee() {
      axios.get(`/api/logged-in-user-positions`).then((response) => {
        this.employeeList = response.data;
      });
    },
  },

  created() {
    this.getTopFiveEmployee();
  },
};
</script>
