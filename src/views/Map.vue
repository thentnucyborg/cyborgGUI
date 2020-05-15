<template>
  <div id="map" class="homebg">
    <b-container style="max-width: 1400px">
      <b-row align-h="center">
        <b-col class="m-3 box2 txtcenter">
          <navigationMap></navigationMap>
        </b-col>
        <b-col class="m-3 box2">
          <debugConsole></debugConsole>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import debugConsole from "../components/debugConsole";
import navigationMap from "../components/navigationMap";
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




