<template>
  <div id="map" class="homebg">
    <b-container>
      <b-row align-h="center" class="pt-3">
        <b-col class="box mr-2">
          <b-row>
            <div id="map"></div>
          </b-row>
        </b-col>
        <b-col class="box ml-2">
          <debugConsole></debugConsole>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

// var gridClientNav = new NAV2D.OccupancyGridClientNav({
//         ros : ros,
//         rootObject : viewer.scene,
//         viewer : viewer,
//         withOrientation : true,
//         serverName : '/move_base',
//         image : 'img/pioneerlxmodel.png'
//     });



// import Vue from 'vue';
// require("../assets/js/easeljs/easeljs.min.js");
// import createjs from "../assets/js/easeljs/easeljs.min.js";
// import createjs from 'easeljs'
// Object.defineProperty(Vue.prototype, '$createjs', { value: createjs });
// import eventemitter2 from "eventemitter2";
// Object.defineProperty(Vue.prototype, '$eventemitter2', { value: eventemitter2 });

// Object.defineProperty(Vue.prototype, '$roslib', { value: roslib });
// import ros2d from 'ros2d';
// Object.defineProperty(Vue.prototype, '$ros2d', { value: ros2d });

// import roslib from 'roslib'
// import nav2d from '../assets/js/nav2djs/nav2d.js'
// Vue.use(easeljs)
// Vue.use(require("easeljs"))
// import NAV2D from '../assets/js/nav2djs/nav2d.js';

// var mapClick = false;
// var staticMap;
// var canvasWidth = 700;
// var canvasHeight = 700;

// var widthRatio;
// var heightRatio;


// import ROSLIB from "roslib";
// import NAV2D from "./src/assets/js/nav2djs/nav2d.js";
// import ROS2D from "ros2d";

// var viewer = new ROS2D.Viewer({
//   divID: "map",
//   width: canvasWidth,
//   height: canvasHeight
// });

// var gridClientNav = new NAV2D.OccupancyGridClientNav({
//   ros: this.$ros,
//   rootObject: viewer.scene,
//   viewer: viewer,
//   withOrientation: true,
//   serverName: "/move_base",
//   image: "img/pioneerlxmodel.png"
// });

// var mapTopic = new ROSLIB.Topic({
//   ros: this.$ros,
//   name: "/map",
//   messageType: "nav_msgs/OccupancyGrid"
// });

// mapTopic.subscribe(function(mapT) {
//   var mapWidth;
//   mapTopic.unsubscribe();
//   staticMap = mapT.data;
//   mapWidth = mapT.info.width;
//   widthRatio = mapT.info.width / canvasWidth;
//   heightRatio = mapT.info.height / canvasHeight;
// });

// var getStaticMapClient = new ROSLIB.Service({
//   ros: this.$ros,
//   name: "/static_map",
//   serviceType: "nav_msgs/GetMap"
// });

// var request = new ROSLIB.ServiceRequest({});
// var flag = true;
// getStaticMapClient.callService(request, function(result) {});
// flag = false;

// const canvas = document.querySelector("#map canvas");
// // function onClick(event, x, y) {
// //     console.log(getCursorPosition(event));
// // };
// function onClick(event, x, y) {
//   getCursorPosition(event);
// }

// canvas.addEventListener("click", e => onClick(e), false);

// // Function for getting cursor position from canvas click
// function getCursorPosition(event) {
//   var x;
//   var y;
//   if (event.pageX != undefined && event.pageY != undefined) {
//     x = event.pageX;
//     y = event.pageY;
//   } else {
//     x =
//       event.clientX +
//       document.body.scrollLeft +
//       document.documentElement.scrollLeft;
//     y =
//       event.clientY +
//       document.body.scrollTop +
//       document.documentElement.scrollTop;
//   }
//   x -= canvas.offsetLeft;
//   y -= canvas.offsetTop;

//   x = Math.round(x * widthRatio);
//   y = Math.round(y * heightRatio);
//   console.log("x: ");
//   var num = x * 2528 + y;
//   console.log(staticMap[num]);
//   return [x, y];
// }
export default {
  // created() {
  // console.log(roslib);
  // }
};
</script>
<style scoped>
.homebg {
  background-color: #f3f3f3;
}
</style>