<template>
  <div id="app">
    <div id="nav">
      <b-navbar class="p-0" toggleable="lg" type="light">
        <b-col cols="4">
          <rosStatus class="float-left"></rosStatus>
        </b-col>
        <b-col cols="4">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="mx-auto">
              <b-nav-item style="font-size:large" to="/">Home</b-nav-item>
              <b-nav-text style="font-size:large">|</b-nav-text>
              <b-nav-item style="font-size:large" to="/Map">Map</b-nav-item>
              <b-nav-text style="font-size:large">|</b-nav-text>
              <b-nav-item style="font-size:large" to="/ManualControl">Manual Control</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
        <b-col cols="4">
          <b-navbar-toggle class="float-right" target="nav-collapse"></b-navbar-toggle>
        </b-col>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<style>
::selection {
  background: #fed136;
  text-shadow: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.txtcenter{
  text-align: center;
}

#nav {
  padding: 0px 10px 0px 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import rosStatus from "./components/rosStatus";

export default {
  components: {
    rosStatus
  }
};
</script>
