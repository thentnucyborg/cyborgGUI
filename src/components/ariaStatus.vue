<template>
  <div id="ariaStatus">
    <b-row align-h="center">
        hello
    </b-row>
    <b-row align-h="center">
       hallo
    </b-row>
  </div>
</template>

<script>
import ROSLIB from 'roslib';

// function getTopics() {
//   var cmdBehaviour = new ROSLIB.Topic({
//     ros: this.$ros,
//     name: "/cyborg_commander/robot_mode",
//     messageType: "std_msgs/String"
//   });
//   var behaviourVal = new ROSLIB.Message({
//     data: val
//   });
//   cmdBehaviour.publish(behaviourVal);
// }

export default {
  name: "modeButtons",
  methods: {
    // getTopics
  },
  mounted() {
      var systemStateTopic = new ROSLIB.Topic({
        ros: this.$ros,
        name: '/cyborg_controller/state_change',
        messageType: 'cyborg_controller/SystemState'
    });

    systemStateTopic.subscribe(function (msg) {
        console.log("got data"+ String(msg.event));
        // document.getElementById("txtSMACHEvent").innerHTML = msg.event;
        // document.getElementById("txtPrevSMACHState").innerHTML = msg.from_system_state;
        // document.getElementById("txtCurrSMACHState").innerHTML = msg.to_system_state;
    });

    var emotionalStateTopic = new ROSLIB.Topic({
        ros: this.$ros,
        name: '/cyborg_controller/emotional_state',
        messageType: 'cyborg_controller/EmotionalState'
    });

    emotionalStateTopic.subscribe(function (msg) {
        console.log("got data" + String(msg));
        // document.getElementById("txtPrevEmotionalState").innerHTML = msg.from_emotional_state;
        // document.getElementById("txtCurrEmotionalState").innerHTML = msg.to_emotional_state;
        // document.getElementById("txtPleasure").innerHTML = msg.current_pleasure.toFixed(4);
        // document.getElementById("txtArousal").innerHTML = msg.current_arousal.toFixed(4);
        // document.getElementById("txtDominance").innerHTML = msg.current_dominance.toFixed(4);
    });

    var motorStateTopic = new ROSLIB.Topic({
        ros: this.$ros,
        name: '/RosAria/motors_state',
        messageType: 'std_msgs/Bool'
    });

    motorStateTopic.subscribe(function (msg) {
        if (msg.data == true){
            console.log("got data"  + String(msg));
            // document.getElementById("txtMotorsState").innerHTML = "ON";
        }else{
            console.log("got data"  + String(msg));
            // document.getElementById("txtMotorsState").innerHTML = "OFF";
        } 
    });

    var behaviourStateTopic = new ROSLIB.Topic({
        ros: this.$ros,
        name: '/cyborg_commander/robot_mode',
        messageType: 'std_msgs/Bool'
    });

    behaviourStateTopic.subscribe(function (msg) {
        if (msg.data == true){
            console.log("got data"  + String(msg));
            // document.getElementById("txtBehaviourState").innerHTML = "ON";
        }else{
            console.log("got data"  + String(msg));
            // document.getElementById("txtBehaviourState").innerHTML = "OFF";
        } 
    });

    var rosOutTopic = new ROSLIB.Topic({
        ros: this.$ros,
        name: '/rosout',
        messageType: 'rosgraph_msgs/Log'
    });
    var textArea = document.getElementById("formControlTextarea1");
    rosOutTopic.subscribe(function (msg) {
        console.log("got data"  + String(msg));
        document.getElementById("formControlTextarea1").innerHTML += msg.msg + "\n";
        textArea.scrollTop = textArea.scrollHeight;
    });
  }
};
</script>

<style>
</style>