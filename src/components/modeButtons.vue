<template>
    <div id="modeButtons">
        <b-button v-on:click="SetBehaviour('behaviour')">Start Behaviour</b-button>
        <b-button v-on:click="SetBehaviour('manual control')">Start Manual</b-button>
        <b-button v-on:click="SetBehaviour('demo')">Start Demo</b-button>
        <b-button v-on:click="SetBehaviour('stop')">Stop</b-button>

        <!-- <input type="button" id="btnStartDemo" v-on:click="SetBehaviour('demo')" value="'Start Demo'" />
        <input type="button" id="btnStartManual" v-on:click="SetBehaviour('manual control')" value="Start manual" />
        <input type="button" id="btnStartBehaviour" v-on:click="SetBehaviour('behaviour')" value="Start behaviour" />
        <input type="button" id="btnStopBehaviour" v-on:click="SetBehaviour('stop')" value="Stop behaviour" /> -->
    </div>
</template>

<script>
import ROSLIB from 'roslib'
var ros = new ROSLIB.Ros({
      url: "ws://localhost:9090"
});
// Called by 'start robot' and 'stop robot' buttons
function SetBehaviour(val) {
    var cmdBehaviour = new ROSLIB.Topic({
    ros: ros,
    name: '/cyborg_commander/robot_mode',
    messageType: 'std_msgs/String'
    });
    var behaviourVal = new ROSLIB.Message({
        data: val
    });
    cmdBehaviour.publish(behaviourVal);
}

export default {
    name: "modeButtons",
    components: {
    },
    methods: {
        SetBehaviour
    }
}
</script>

<style>

</style>