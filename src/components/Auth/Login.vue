<template>
  <div class="container mt-5">
    <div class="row">
      <div class="offset-md-3 col-md-6 offset-md-3">
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email" />
            <small v-if="errors.email" class="text-danger">{{ errors.email[0] }}</small>
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" />
            <small v-if="errors.password" class="text-danger">{{ errors.password[0] }}</small>
          </div>
          <div class="form-group">
            <label for="password">Branch</label>
            <select class="form-control" v-model="branch_id">
              <option value="" disabled selected>Select Branch</option>
              <option v-for="(branch, index) in branchList" :key="index" :value="branch.id">{{ branch.name }}</option>
            </select>
            <small v-if="errors.branch_id" class="text-danger">{{ errors.branch_id[0] }}</small>
          </div>
          <div class="form-group">
            <small v-if="errors.message" class="text-danger">{{ errors.message[0] }}</small>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      branch_id: "",
      errors: {},
      branchList: [],
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
          branch_id: this.branch_id,
        })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getBranch() {
      axios.get(`http://127.0.0.1:8000/api/branch`).then(({ data }) => {
        this.branchList = data;
      });
    },
  },
  created() {
    this.getBranch();
  },
};
</script>
