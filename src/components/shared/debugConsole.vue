<template>
  <div id="debugConsole">
    <b-form-group class="txtcenter">
      <label>Debug Output</label>
      <b-form-textarea
        contenteditable="true"
        class="form-control"
        id="formControlTextarea1"
        :rows="numRows"
        spellcheck="false"
        readonly
        disabled
        style="margin-top: 0px; margin-bottom: 0px;"
      ></b-form-textarea>
    </b-form-group>
  </div>
</template>

<script>
import ROSLIB from "roslib";
export default {
  name: "debugConsole",
  props: {
    numRows: String
  },
  created() {
    this.rosOutTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/rosout",
      messageType: "rosgraph_msgs/Log"
    });
    this.rosOutTopic.subscribe(function(msg) {
      // console.log("got debug line");
      var textArea = document.getElementById("formControlTextarea1");
      if (msg.level == 2) {
        textArea.innerHTML += "[INFO] : " + msg.msg + "\n";
      } else if (msg.level == 4) {
        textArea.innerHTML += "[WARN] : " + msg.msg + "\n";
      } else if (msg.level == 8) {
        textArea.innerHTML += "[ERROR] : " + msg.msg + "\n";
      } else if (msg.level == 16) {
        textArea.innerHTML += "[FATAL] : " + msg.msg + "\n";
      } else {
        textArea.innerHTML += msg.msg + "\n";
      }
      textArea.scrollTop = textArea.scrollHeight;
    });
  },
  mounted() {},
  destroyed() {
    this.rosOutTopic.unsubscribe();
  }
};
</script>

<style>
</style>