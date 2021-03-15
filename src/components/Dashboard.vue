<template>
  <div class="row">
    <div class="col-sm-6">
      <template v-if="attendanceCheck">
        <a href="" @click.prevent="checkOut">
          <span class="btn btn-danger">Check-out</span>
        </a>
      </template>
      <template v-else>
        <a href="" @click.prevent="checkIn">
          <span class="btn btn-success">Check-in</span>
        </a>
      </template>
    </div>
    <div class="col-sm-6">
      <h4>Welcome to dashboard</h4>
    </div>
    <div class="col-sm-12 mt-5">
      <app-chart type="bar-chart" :height="260" :labels="labels" :data-sets="barChartData" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  data() {
    return {
      attendanceCheck: {},
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      barChartData: [
        {
          label: "GitHub Commits",
          backgroundColor: "#f87979",
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
        },
      ],
    };
  },
  methods: {
    checkIn() {
      axios.post(`/api/check-in`).then((response) => {
        console.log(response);
        this.getCheckInAttendence();
      });
    },
    getCheckInAttendence() {
      axios.get(`/api/check-attendance`).then(({ data }) => {
        this.attendanceCheck = data;
      });
    },
    checkOut() {
      axios.patch(`/api/check-out/${this.attendanceCheck.id}`).then((response) => {
        console.log(response);
        this.getCheckInAttendence();
      });
    },
    authUserPreviousMonth() {
      axios.get(`/api/previous-month`).then((response) => {
        this.barChartData.forEach((element) => {
          console.log(response.data);
          element.data = response.data;
        });
        this.barChartData[0].data.push(0);
      });
    },
  },
  mounted() {
    this.getCheckInAttendence();
    this.authUserPreviousMonth();
  },
};
</script>
