<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/home" class="nav-link"> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/top-five-employees" class="nav-link"> Top Five Employees</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/logged-in-users-position" class="nav-link"> Logged in User’s Position</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
