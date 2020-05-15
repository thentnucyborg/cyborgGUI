<template>
  <div id="navigationMap" class="pb-3">
    <b-row>
      <b-col style="text-align: center;">
        <label>x: {{ x_cord }}</label>
        <label>y: {{ y_cord }}</label>
        <h5 class="mt-3">Toggleable Button</h5>
        <b-button :pressed.sync="myToggle" variant="primary">Select Pose</b-button>
        <p>Select Initial Pose: <strong><div id="poseToggle">{{ myToggle }}</div></strong></p>
      </b-col>
      <b-col style="text-align: center;"></b-col>
    </b-row>
    <div id="mapDiv" align-h="center" class></div>
  </div>
</template>

<script>
export default {
  name: "navigationMap",
  created() {
    console.log("created");
  },
  data() {
    return {
      myToggle: false,
      x_cord: 0,
      y_cord: 0
    };
  },
  mounted() {
    var self = this;
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
    viewer.toggle = self.myToggle;
    var gridClientNav = new NAV2D.OccupancyGridClientNav({
      ros: this.$ros,
      rootObject: viewer.scene,
      viewer: viewer,
      withOrientation: true,
      serverName: "/move_base",
      image: "../img/pioneerlxmodel.png"
    });
    /* eslint-enable no-unused-vars, no-undef */
    console.log(gridClientNav);
    var canvas = document.querySelector("#mapDiv canvas");
    // Handle Canvas Click Events (for clicks outside of the robot images)
    canvas.addEventListener("click", onClick, false);
    function onClick() {
      self.x_cord = viewer.scene.mouseX;
      self.y_cord = viewer.scene.mouseY;
    //   console.log(gridClientNav);

    }
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




