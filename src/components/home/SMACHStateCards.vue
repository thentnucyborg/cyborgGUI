<template>
  <div id="SMACHStateCards" class="txtcenter">
    <b-row align-h="center">
      <b-card class="m-2" header="Selected mode">
        <b-card-text>{{ current_mode }}</b-card-text>
      </b-card>
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
  name: "SMACHStateCards",
  data() {
    return {
      current_mode: "-",
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
      // console.log("got data1" + String(msg.event));
      self.previous_state = msg.from_system_state;
      self.event = msg.event;
      self.current_state = msg.to_system_state;
});

    this.behaviourStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_commander/robot_mode",
      messageType: "std_msgs/String"
    });

    this.behaviourStateTopic.subscribe(function(msg) {
      if (msg.data == "behaviour") {
        self.current_mode = "behaviour";
        // console.log("got data4 behaviourstate" + String(msg));
      } else if (msg.data == "demo") {
        self.current_mode = "demo";
        // console.log("got data4" + String(msg));
      }else if (msg.data == "manual control") {
        self.current_mode = "manual control";
        // console.log("got data4" + String(msg));
      }else if (msg.data == "stop") {
        self.current_mode = "stopped";
        // console.log("got data4" + String(msg));
      }else{
        self.current_mode = "-";
      }
    });
  },
  destroyed() {
    this.systemStateTopic.unsubscribe();
    this.behaviourStateTopic.unsubscribe();
  }
};
</script>

<style>
.card {
  font-size: 0.95rem;
  width: 116px;
  height: fit-content;
}
.card-header {
  padding: 0.3rem !important;
}
.card-body {
  padding: 0.75rem !important;
}
</style>