<template>
  <div id="app">
    <div id="nav">
      <b-navbar class="p-0" toggleable="lg" type="light">
        <b-navbar-brand>NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav >
          <b-navbar-nav class="mx-auto">
            <b-nav-item to="/">Home</b-nav-item> 
            <b-nav-text >|</b-nav-text>
            <b-nav-item to="/Map">Map</b-nav-item>
            <b-nav-text >|</b-nav-text>
            <b-nav-item to="/ManualControl">Manual Control</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/Map">Map</router-link> |
      <router-link to="/ManualControl">Manual Control</router-link> -->
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px 10px 0px 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Vue from "vue";

import ROSLIB from "roslib";
Object.defineProperty(Vue.prototype, "$ROSLIB", { value: ROSLIB });

var ros = new ROSLIB.Ros({
  url: "ws://localhost:9090"
});
Object.defineProperty(Vue.prototype, "$ros", { value: ros });

ros.on("connection", function() {
  console.log("Connected to websocket server.");
});

ros.on("error", function(error) {
  console.log("Error connecting to websocket server: ", error);
});

ros.on("close", function() {
  console.log("Connection to websocket server closed.");
});

export default {};
</script>
