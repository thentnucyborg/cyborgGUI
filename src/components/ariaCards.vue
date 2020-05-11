<template>
  <div id="ariaCards" class="d-flex flex-column txtcenter inset-b-border">
    <b-row align-h="center">
      <b-card class="m-2" header="Motors state">
        <b-card-text>{{ motors_state }}</b-card-text>
      </b-card>
      <b-card class="m-2" header="Battery charge">
        <b-card-text>{{ battery_charge }}</b-card-text>
      </b-card>
    </b-row>
    <b-row align-h="center">
      <b-card class="m-2" header="Charging state">
        <b-card-text>{{ charging_state }}</b-card-text>
      </b-card>
      <b-card class="m-2" header="Battery voltage">
        <b-card-text>{{ battery_voltage }}</b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import ROSLIB from "roslib";

export default {
  name: "ariaCards",
  data() {
    return {
      motors_state: "-",
      battery_charge: "-",
      charging_state: "-",
      battery_voltage: "-"
    };
  },
  created() {
    var self = this;

    this.motorStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/RosAria/motors_state",
      messageType: "std_msgs/Bool"
    });
    this.motorStateTopic.subscribe(function(msg) {
      if (msg.data == true) {
        console.log("got data3" + String(msg));
        self.motors_state = "ON";
      } else {
        self.motors_state = "ON";
        console.log("got data3" + String(msg));
      }
    });


    this.batteryChargeTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/RosAria/battery_state_of_charge",
      messageType: "std_msgs/Float32"
    });
    this.batteryChargeTopic.subscribe(function(msg) {
      self.battery_charge = String(msg.data * 100) + "%";
    });


    this.batteryVoltageTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/RosAria/battery_voltage",
      messageType: "std_msgs/Float64"
    });
    this.batteryVoltageTopic.subscribe(function(msg) {
      self.battery_voltage = msg.data.toFixed(4);
    });


    this.chargingStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/RosAria/battery_recharge_state",
      messageType: "std_msgs/Int8"
    });
    this.chargingStateTopic.subscribe(function(msg) {
      if (msg.data == 0) {
        self.charging_state = "not charging";
      } else if (msg.data > 0) {
        self.charging_state = "charging";
      } else if (msg.data < 0) {
        self.charging_state = "error";
      }
    });
  },
  destroyed() {
    this.motorStateTopic.unsubscribe();
    this.batteryChargeTopic.unsubscribe();
    this.chargingStateTopic.unsubscribe();
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
.inset-b-border {
  border-bottom-style: inset;
}
</style>