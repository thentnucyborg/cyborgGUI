<template>
  <div id="map" class="homebg">
    <b-container>
      <b-row align-h="center" class="pt-3">
        <b-col class="m-2 box2 d-flex align-items-center justify-content-center">
            <div id="mapDiv"></div>
        </b-col>
        <b-col class="box ml-2">
          <debugConsole></debugConsole>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import debugConsole from "../components/debugConsole";
// import ROSLIB from "roslib";

export default {
  name: "Map",
  components: { debugConsole },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("try");

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
    /* eslint-enable no-unused-vars, no-undef */
  }
};
</script>
<style scoped>
.homebg {
  background-color: #f3f3f3;
}
</style>




