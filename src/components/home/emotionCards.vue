<template>
  <div id="emotionCards" class="d-flex flex-column txtcenter inset-b-border">
    <b-row align-h="center">
      <b-card class="m-2" header="Emotion">
        <b-card-text>{{ current_emotion }}</b-card-text>
      </b-card>
      <b-card class="m-2" header="Pleasure">
        <b-card-text>{{ current_pleasure }}</b-card-text>
      </b-card>
    </b-row>
    <b-row align-h="center">
      <b-card class="m-2" header="Arousal">
        <b-card-text>{{ current_arousal }}</b-card-text>
      </b-card>
      <b-card class="m-2" header="Dominance">
        <b-card-text>{{ current_dominance }}</b-card-text>
      </b-card>
    </b-row>
  </div>
</template>

<script>
import ROSLIB from "roslib";

export default {
  name: "emotionCards",
  data() {
    return {
      current_emotion: "-",
      current_pleasure: "-",
      current_arousal: "-",
      current_dominance: "-"
    };
  },
  created() {
    var self = this;
    this.emotionalStateTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_controller/emotional_state",
      messageType: "cyborg_controller/EmotionalState"
    });

    this.emotionalStateTopic.subscribe(function(msg) {
      self.current_emotion = msg.to_emotional_state;
      self.current_pleasure = msg.current_pleasure.toFixed(4);
      self.current_arousal = msg.current_arousal.toFixed(4);
      self.current_dominance = msg.current_dominance.toFixed(4);
      // console.log("got data2" + String(msg));
    });
  },
  destroyed() {
    this.emotionalStateTopic.unsubscribe();
  }
};
</script>

<style>
.card {
  font-size: 0.95rem;
  width: 114px;
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