<template>
  <div id="map" class="homebg">
    <b-container style="max-width: 1400px">
      <b-row align-h="center">
        <b-col class="m-3 box txtcenter">
          <navigationMap></navigationMap>
        </b-col>
        <b-col class="m-3 box">
          <debugConsole numRows="26"></debugConsole>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navigationMap from "../components/map/navigationMap";
import debugConsole from "../components/shared/debugConsole";
// import ROSLIB from "roslib";

export default {
  name: "Map",
  components: {
    debugConsole,
    navigationMap
  }
};
</script>
<style scoped>
/* .canvas {
  -o-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
} */
.homebg {
  background-color: #f3f3f3;
}
.box {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /*Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5*/
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /* Firefox 3.5 - 3.6 */
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.box:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.22);
}

</style>




