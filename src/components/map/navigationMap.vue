<template>
  <div id="navigationMap" class="pb-3">
    <b-row class="my-1">
      <b-col style="text-align: center;">
        <b-form inline>
          <b-button :pressed.sync="toggleInitPose" variant="primary">Toggle Initial Pose</b-button>
          <span class="mx-1">Initial Pose:</span>
          <strong>
            <span id="poseToggle">{{ toggleInitPose }}</span>
          </strong>
        </b-form>
      </b-col>
      <b-col style="text-align: end;">
        <span class="mx-1">x: {{ x_cord }} y: {{ y_cord }}</span>
        <span class="mx-1">r: {{ r_red }} g: {{ g_green }} b: {{ b_blue }}</span>
      </b-col>
    </b-row>
    <div id="mapDiv" align-h="center"></div>
    <b-row>
      <b-col style="text-align: center;">
        <b-form inline>
          <b-button variant="success" v-on:click="setMotors('ON')">MOTORS ON</b-button>
          <b-button variant="danger" v-on:click="setMotors('OFF')" class="ml-1">MOTORS OFF</b-button>
          <span class="mx-1">Motors:</span>
          <strong>
            <span v-if="toggleMotors">ON</span>
            <span v-else>OFF</span>
          </strong>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ROSLIB from "roslib";
export default {
  name: "navigationMap",
  data() {
    return {
      toggleInitPose: false,
      x_cord: 0,
      y_cord: 0,
      r_red: 0,
      g_green: 0,
      b_blue: 0,
      toggleMotors: "-"
    };
  },
  methods: {
    setMotors: function(val) {
      var self = this;
      var motorsService;
      var request = new ROSLIB.ServiceRequest({});

      if (val == "ON") {
        motorsService = new ROSLIB.Service({
          ros: this.$ros,
          name: "/RosAria/enable_motors",
          serviceType: "std_srvs/Empty"
        });
        motorsService.callService(request, function(result) {
          console.log(result);
          self.toggleMotors = true;
        });
      } else if (val == "OFF") {
        motorsService = new ROSLIB.Service({
          ros: this.$ros,
          name: "/RosAria/disable_motors",
          serviceType: "std_srvs/Empty"
        });
        motorsService.callService(request, function(result) {
          console.log(result);
          self.toggleMotors = false;
        });
      } else {
        alert("Could not turn Motors on or off");
      }
    }
  },
  mounted() {
    var self = this;

    var canvasWidth = 620;
    var canvasHeight = 620;

    /* eslint-disable no-unused-vars, no-undef */
    // Create the main viewer.
    var viewer = new ROS2D.Viewer({
      divID: "mapDiv",
      width: canvasWidth,
      height: canvasHeight
    });
    var gridClientNav = new NAV2D.OccupancyGridClientNav({
      ros: this.$ros,
      rootObject: viewer.scene,
      viewer: viewer,
      withOrientation: true,
      serverName: "/move_base",
      image: "../img/pioneerlxmodel.png"
    });
    var canvas = document.querySelector("#mapDiv canvas");
    /* eslint-enable no-unused-vars, no-undef */
    var stage = viewer.scene;
    stage.addEventListener("stagemousemove", function(event) {
      self.x_cord = Math.round(event.stageX);
      self.y_cord = Math.round(event.stageY);

      var ctx = canvas.getContext("2d");
      var data = ctx.getImageData(event.stageX, event.stageY, 1, 1).data;
      self.r_red = data[0];
      self.g_green = data[1];
      self.b_blue = data[2];
    });
  }
};
</script>
<style scoped>
.homebg {
  background-color: #f3f3f3;
}
.box2 {
  background-color: white;
  /* -webkit-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px; */
  /* -webkit-box-shadow: rgba(0, 0, 0,.30) 0 2px 3px; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /*Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5*/
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /* Firefox 3.5 - 3.6 */
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>




