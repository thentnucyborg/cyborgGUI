<template>
  <div id="modeButtons">
    <b-row>
        <b-button
          class="lgButton m-2"
          variant="success"
          v-on:click="SetBehaviour('behaviour')"
        >START MOTORS</b-button>
        <b-button
          class="lgButton m-2"
          variant="dark"
          v-on:click="SetBehaviour('manual control')"
        >START MANUAL</b-button>
  </div>
</template>

<script>
import ROSLIB from "roslib";
function SetBehaviour(val) {
  var cmdBehaviour = new ROSLIB.Topic({
    ros: this.$ros,
    name: "/cyborg_commander/robot_mode",
    messageType: "std_msgs/String"
  });
  var behaviourVal = new ROSLIB.Message({
    data: val
  });
  cmdBehaviour.publish(behaviourVal);
}

export default {
  name: "modeButtons",
  methods: {
    SetBehaviour
  }
};
</script>

<style>
.lgButton {
  width: 100px;
  height: 62px;
  font-size: 0.85rem !important;
}
</style>