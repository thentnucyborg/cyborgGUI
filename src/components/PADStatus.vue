<template>
  <div id="PADStatus">
    <b-row align-h="center">
      <b-card class="m-2" header="Current state">
        <b-card-text>{{ current_state }}</b-card-text>
      </b-card>
    </b-row>
    <b-row align-h="center">
      <b-card class="m-2" header="Prev State">
        <b-card-text>{{ previous_state }}</b-card-text>
      </b-card>
      <b-card class="m-2" header="Event">
        <b-card-text>{{ event }}</b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import ROSLIB from "roslib";

export default {
  name: "modeButtons",
  data() {
    return {
      previous_state: "-",
      event: "-",
      current_state: "-"
    };
  },
  created() {
    var self = this;
    this.systemStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_controller/state_change",
      messageType: "cyborg_controller/SystemState"
    });

    this.systemStateTopic.subscribe(function(msg) {
      console.log("got data1" + String(msg));
      self.previous_state = msg.from_system_state;
      self.event = msg.event;
      self.current_state = msg.to_system_state;
    });

    this.emotionalStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_controller/emotional_state",
      messageType: "cyborg_controller/EmotionalState"
    });

    this.emotionalStateTopic.subscribe(function(msg) {
      console.log("got data2" + String(msg));
      // document.getElementById("txtPrevEmotionalState").innerHTML = msg.from_emotional_state;
      // document.getElementById("txtCurrEmotionalState").innerHTML = msg.to_emotional_state;
      // document.getElementById("txtPleasure").innerHTML = msg.current_pleasure.toFixed(4);
      // document.getElementById("txtArousal").innerHTML = msg.current_arousal.toFixed(4);
      // document.getElementById("txtDominance").innerHTML = msg.current_dominance.toFixed(4);
    });

    this.motorStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/RosAria/motors_state",
      messageType: "std_msgs/Bool"
    });

    this.motorStateTopic.subscribe(function(msg) {
      if (msg.data == true) {
        console.log("got data3" + String(msg));
        // document.getElementById("txtMotorsState").innerHTML = "ON";
      } else {
        console.log("got data3" + String(msg));
        // document.getElementById("txtMotorsState").innerHTML = "OFF";
      }
    });

    this.behaviourStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_commander/robot_mode",
      messageType: "std_msgs/String"
    });

    this.behaviourStateTopic.subscribe(function(msg) {
      if (msg.data == true) {
        console.log("got data4 behaviourstate" + String(msg));
        // document.getElementById("txtBehaviourState").innerHTML = "ON";
      } else {
        console.log("got data4" + String(msg));
        // document.getElementById("txtBehaviourState").innerHTML = "OFF";
      }
    });
  },
  destroyed() {
    this.motorStateTopic.unsubscribe();
    this.behaviourStateTopic.unsubscribe();
    this.systemStateTopic.unsubscribe();
  }
};
</script>

<style>
.card {
  font-size: 0.95rem;
  width: 116px;
  height: 84px;
}
.card-header {
  padding: 0.3rem !important;
}
.card-body {
  padding: 0.75rem !important;
}
</style>