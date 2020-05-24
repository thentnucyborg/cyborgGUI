<template>
  <div id="teleop">
    <b-container>
      <b-row style="justify-content: center;">
        <label for="robot-speed">
          <strong>Robot speed</strong>
        </label>
      </b-row>

      <b-row>
        <input type="range" min="15" max="80" value="50" class="custom-range mb-2" id="robot-speed" />
      </b-row>
      <b-row style="justify-content: center;">
        <video
          width="500px"
          height="500px"
          data-src="http://localhost:8090/stream?topic=/videostream&quality=80#/"
          class="p-1 bg-dark"
          id="video"
        ></video>
      </b-row>
      <!-- <img src="http://localhost:8090/stream?topic=/videostream&type=mjpeg&quality=80#/" width="500px" height="500px" class="p-1 bg-dark" alt id="video" /> -->
      <b-row style="justify-content: center; margin-top: 4px;">
        <div class="joystick" id="joystick"></div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars, no-undef */
// var twist;
// var cmdVel;
// var publishImmediately= true;
// var robot_IP;
// var manager;
// var teleop;
// var ros;
/* eslint-enable no-unused-vars, no-undef */

// window.onload = function() {
//   window.setInterval(myCallback, 5000);
// };

// function myCallback() {
//   var video = document.getElementById("video");
//   video.src =
//     "http://localhost:8090/stream?topic=/videostream&type=mjpeg&quality=80#/";

//   video.onload = function() {
//     console.log("changed source");
//   };
// }

import ROSLIB from "roslib";
export default {
  name: "teleop",
  created() {
    this.twist = new ROSLIB.Message({
      linear: {
        x: 0,
        y: 0,
        z: 0
      },
      angular: {
        x: 0,
        y: 0,
        z: 0
      }
    });
    this.cmdVel = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cmd_vel",
      messageType: "geometry_msgs/Twist"
    });
    this.cmdVel.advertise();
  },
  mounted() {
    this.createJoyStick();
    this.initTeleopKeyboard();

    // video.onload = function() {

    // }
  },
  destroyed() {
    this.destroyTeleopKeyBoard();
  },
  methods: {
    createJoyStick: function() {
      var self = this;
      var joystick;
      // Check if joystick was aready created
      if (joystick == null) {
        var joystickContainer = document.getElementById("joystick");
        // joystick configuration, if you want to adjust joystick, refer to:
        // https://yoannmoinet.github.io/nipplejs/
        var options = {
          zone: joystickContainer,
          position: { left: 50 + "%", top: 50 + "%" },
          mode: "static",
          size: 200,
          color: "#0066ff",
          restJoystick: true
        };

        /* eslint-disable no-unused-vars, no-undef */
        joystick = nipplejs.create(options);
        /* eslint-enable no-unused-vars, no-undef */
        // event listener for joystick move
        joystick.on("move", function(evt, nipple) {
          // nipplejs returns direction in screen coordinates
          // we need to rotate it, that dragging towards screen top will move robot forward
          var direction = nipple.angle.degree - 90;
          if (direction > 180) {
            direction = -(450 - nipple.angle.degree);
          }
          // convert angles to radians and scale linear and angular speed
          // adjust if youwant robot to drive faster or slower
          var lin = Math.cos(direction / 57.29) * nipple.distance * 0.005 || 0;
          var ang = Math.sin(direction / 57.29) * nipple.distance * 0.005 || 0;
          // nipplejs is triggering events when joystick moves each pixel
          // we need delay between consecutive messege publications to
          // prevent system from being flooded by messages
          // events triggered earlier than 50ms after last publication will be dropped
          var publishImmediately = true;
          if (publishImmediately) {
            publishImmediately = false;
            self.moveAction(lin, ang);
            setTimeout(function() {
              publishImmediately = true;
            }, 50);
          }
        });
        // event litener for joystick release, always send stop message
        joystick.on("end", function() {
          self.moveAction(0, 0);
        });
      }
    },
    initTeleopKeyboard: function() {
      var self = this;
      // Use w, s, a, d keys to drive your robot
      // Check if keyboard controller was already created
      /* eslint-disable no-unused-vars, no-undef */
      self.teleop = new KEYBOARDTELEOP.Teleop({
          ros: this.$ros,
          topic: "/cmd_vel"
        });
      /* eslint-enable no-unused-vars, no-undef */
      // Add event listener for slider moves
      var robotSpeedRange = document.getElementById("robot-speed");
      self.teleop.scale = robotSpeedRange.value / 100;
      robotSpeedRange.oninput = function() {
        self.teleop.scale = robotSpeedRange.value / 100;
      };
    },
    destroyTeleopKeyBoard: function() {
      var body = document.getElementsByTagName('body')[0];
      body.removeEventListener('keydown', this.teleop.handleKeyFunction , false);
      body.removeEventListener('keyup', this.teleop.handleKeyFunction, false);
    },
    moveAction: function(linear, angular) {
      if (linear !== undefined && angular !== undefined) {
        this.twist.linear.x = linear;
        this.twist.angular.z = angular;
      } else {
        this.twist.linear.x = 0;
        this.twist.angular.z = 0;
      }
      this.cmdVel.publish(this.twist);
    }
  }
};
</script>

<style scoped>
.joystick{
  position: relative; 
  background-color: #e9ecef; 
  width:250px; 
  height:250px;
} 
</style>>