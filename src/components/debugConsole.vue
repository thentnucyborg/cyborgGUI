<template>
  <div id="debugConsole">
    <b-form-group>
      <label>Debug Output</label>
      <b-form-textarea
        class="form-control"
        id="formControlTextarea1"
        rows="16"
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
  created() {
    this.rosOutTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/rosout",
      messageType: "rosgraph_msgs/Log"
    });
    this.rosOutTopic.subscribe(function(msg) {
      console.log("got data6" + String(msg));
      var textArea = document.getElementById("formControlTextarea1");
      textArea.innerHTML +=
        msg.msg + "\n";
    textArea.scrollTop = textArea.scrollHeight;
    });
  },
  mounted(){

  },
  destroyed(){
      this.rosOutTopic.unsubscribe();
  }
};
</script>

<style>
</style>