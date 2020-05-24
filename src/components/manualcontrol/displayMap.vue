<template>
  <div id="navigationMap" class="pb-3">
    <b-row class="my-1">
      <b-col>
        <span style="display: none;" id="poseToggle">{{ toggleInitPose }}</span>
      </b-col>
      <b-col style="text-align: end;"></b-col>
    </b-row>
    <b-form-group class="txtcenter mb-0">
      <label for="mapDiv"><strong>Map</strong></label>
      <div id="mapDiv" align-h="center"></div>
    </b-form-group>
  </div>
</template>

<script>
import ROSLIB from "roslib";
export default {
  name: "navigationMap",
  data() {
    return {
      toggleInitPose: false,
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
    var canvasWidth = 500;
    var canvasHeight = 400;

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
    /* eslint-enable no-unused-vars, no-undef */
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




