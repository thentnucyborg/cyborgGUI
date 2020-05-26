<template>
  <div id="rosConnection">
    <b-navbar-brand>
      ROS connection:
      <span
        v-if="rosConLoading"
        v-b-popover.hover.top="'Connecting to ROS websocket...'"
      >
        <b-spinner small class="iconStyle"></b-spinner>
      </span>

      <span
        v-if="rosConError"
        v-b-popover.hover.top="'ROS not connected to websocket!'"
        style="color: red"
        class="iconStyle"
      >
        <i class="fas fa-exclamation-circle"></i>
      </span>

      <span
        v-if="rosConOK"
        v-b-popover.hover.top="'ROS connected to websocket.'"
        style="color: green"
        class="iconStyle"
      >
        <i class="fas fa-check-circle"></i>
      </span>
      <b-button
        class="mx-2"
        v-b-popover.hover.top="'Disconnect/reconnect to ROS master'"
        variant="outline-danger"
        v-on:click="reCon"
        size="sm"
      >
        <span class="fas fa-redo-alt"></span>
      </b-button>
    </b-navbar-brand>
  </div>
</template>
<script>
export default {
  name: "rosConnection",
  data() {
    return {
      rosConOK: false,
      rosConError: false,
      rosConLoading: false
    };
  },
  methods: {
    reCon: function() {
      this.$ros.close();
      // this.$ros.connect("wss://localhost:9090");
      this.$ros.connect("wss://cyborg.sytes.net:9090");
    }
  },
  mounted() {
    var self = this;
    this.rosConLoading = true;
    this.rosConError = true;
    this.$ros.on("connection", function() {
      console.log("Connected to websocket server.");
      self.rosConOK = true;
      self.rosConError = false;
      self.rosConLoading = false;
    });
    this.$ros.on("error", function(error) {
      console.log("Error connecting to websocket server: ", error);
      self.rosConOK = false;
      self.rosConError = true;
      self.rosConLoading = false;
    });
    this.$ros.on("close", function() {
      console.log("Connection to websocket server closed.");
      self.rosConOK = false;
      self.rosConLoading = false;
    });
  },
  beforeDestroy(){
    this.$ros.close();
  }
};
</script>

<style>
.iconStyle {
  vertical-align: middle;
}
</style>