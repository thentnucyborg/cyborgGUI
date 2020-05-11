<template>
  <div id="etcCards" class="d-flex flex-column txtcenter inset-b-border">
    <b-row align-h="center">
      <b-card class="my-2 mx-1" header="Text-to-speech">
        <b-card-text>{{ text_to_speech }}</b-card-text>
      </b-card>
      <b-card class="my-2 mx-1" header="cmd location">
        <b-card-text>{{ command_location }}</b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import ROSLIB from "roslib";

export default {
  name: "etcCards",
  data() {
    return {
      text_to_speech: "-",
      command_location: "-"
    };
  },
  created() {
    var self = this;

    this.textToSpeechTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_audio/text_to_speech",
      messageType: "std_msgs/String"
    });
    this.textToSpeechTopic.subscribe(function(msg) {
      self.text_to_speech = msg.data;
    });

    this.commandLocationTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_behavior/command_location",
      messageType: "std_msgs/String"
    });
    this.commandLocationTopic.subscribe(function(msg) {
      self.command_location = msg.data;
    });
  },
  destroyed() {
    this.textToSpeechTopic.unsubscribe();
    this.commandLocationTopic.unsubscribe();
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