<template>
  <div id="commandTool">
    <b-form inline class="my-1 py-1 inset-b-border">
      Command Tool:
      <b-button
        class="mx-2"
        v-b-popover.hover.top="'How to use command tool'"
        v-b-modal.modal-1
        variant="outline-primary"
        size="sm"
      >
        <span class="fas fa-question-circle fa-lg"></span>
      </b-button>
    </b-form>

    <div class="py-1 inset-b-border">
      <b-row>
        <b-col style="text-align: center;">
          <label>Event:</label>
        </b-col>
        <b-col style="text-align: center;">
          <label>Result state:</label>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-textarea
            class="form-control"
            id="textareaCommandTool"
            rows="6"
            spellcheck="false"
            readonly
            disabled
            style="margin-top: 0px; margin-bottom: 0px;"
          ></b-form-textarea>
        </b-col>
      </b-row>
    </div>

    <b-form @submit="sendCommand">
      <b-form-group class="my-2" id="group1" label="Your action:" label-for="input-1">
        <b-form-input id="input-1" required v-model="form.action" placeholder="Enter action"></b-form-input>
      </b-form-group>

      <b-form-group class="my-2" id="group2" label="Your command:" label-for="input-2">
        <b-form-input id="input-2" required v-model="form.command" placeholder="Enter command"></b-form-input>
      </b-form-group>
      <b-button type="submit" class="mb-2" variant="primary">Submit</b-button>
    </b-form>

    <b-modal size="xl" id="modal-1" title="Instructions for using command tool">
      <p class="mb-2">
        The command tool have the following
        <b>actions</b>:
      </p>
      <div class="box p-2">
        <h5>event</h5>&#8227;
        <b>Topic</b>: "/cyborg_controller/register_event".
        <br />&#8227;
        <b>msg type</b>: "std_msgs/String".
        <br />&#8227;
        <b>Example</b>: action:
        <i>event</i> , command:
        <i>start</i>.
        <br />&#8227;
        <b>Info</b>: The
        <b>
          <i>event</i>
        </b> action is used to change
        the SMACH
        <i>SystemState</i>. In the example we change from state
        <i>suspension</i> to state
        <i>idle</i>. The only possible transition
        from state
        <i>suspension</i> to state
        <i>idle</i> is "start". The
        'module' node in cyborg_controller registers the new event, finds the
        associated transition and handles it.
        <br />
      </div>
      <div class="box p-2">
        <h5>speech</h5>&#8227;
        <b>Topic</b>: "/cyborg_audio/text_to_speech".
        <br />&#8227;
        <b>msg Type</b>: "std_msgs/String".
        <br />&#8227;
        <b>Example</b>: action:
        <i>speech</i> , command:
        <i>hello</i>.
        <br />&#8227;
        <b>Info</b>: The
        <b>
          <i>speech</i>
        </b> action is used to make the
        robot say something. The 'text_to_speech' node in cyborg_audio uses a
        pyttsx3 conversion library engine for this. In the example we say hello.
        <br />
      </div>
      <div class="box p-2">
        <h5>emotion (NB! Make sure to start behaviour mode before using)</h5>&#8227;
        <b>Commands</b>:
        <b>
          angry, bored, curious, dignified, elated, inhibited, puzzled, loved,
          unconcerned
        </b>.(can be found in controller node in cyborg_controller)
        <br />&#8227;
        <b>Topic</b>: "/cyborg_audio/text_to_speech".
        <br />&#8227;
        <b>msg Type</b>: "std_msgs/String".
        <br />&#8227;
        <b>Example</b>: action:
        <i>emotion</i> , command:
        <i>angry</i>.
        <br />&#8227;
        <b>Info</b>: The
        <b>
          <i>emotion</i>
        </b> action is used to set the
        emotional state of the emotion-system. The 'emotionsystem' node in
        cyborg_controller finds the emotion in the predefined emotions in the
        'controller' using the
        <i>EmotionalState</i> msg. In the example we set
        the emotional state of the emotion-system to angry.
      </div>
      <div class="box p-2">
        <h5>emotionswitch</h5>&#8227;
        <b>Commands</b>:
        <b>on, ON, off, OFF</b>.
        <br />&#8227;
        <b>Topic</b>: "/cyborg_controller/emotional_controller".
        <br />&#8227;
        <b>msg Type</b>: "std_msgs/String".
        <br />&#8227;
        <b>Example</b>: action:
        <i>emotionswitch</i> , command:
        <i>off</i>.
        <br />&#8227;
        <b>Info</b>: The
        <b>
          <i>emotionswitch</i>
        </b> action is used to
        turn the emotion-system on or off. If this is off, the PAD values are
        not updated over time. In the example we turn the emotion-system off.
      </div>
    </b-modal>
  </div>
</template>

<script>
import ROSLIB from "roslib";
export default {
  name: "commandTool",
  data() {
    return {
      form: {
        action: "",
        command: ""
      },
      show: true
    };
  },
  methods: {
    sendCommand(evt) {
      evt.preventDefault();
      var action = this.form.action;
      var command = this.form.command;
      if (action == "event") {
        var cmdEventTopic = new ROSLIB.Topic({
          ros: this.$ros,
          name: "/cyborg_controller/register_event",
          messageType: "std_msgs/String"
        });
        var eventVal = new ROSLIB.Message({
          data: command
        });
        cmdEventTopic.publish(eventVal);
      } else if (action == "speech") {
        var cmdSpeechTopic = new ROSLIB.Topic({
          ros: this.$ros,
          name: "/cyborg_audio/text_to_speech",
          messageType: "std_msgs/String"
        });
        var speechVal = new ROSLIB.Message({
          data: command
        });
        cmdSpeechTopic.publish(speechVal);
      } else if (action == "emotion") {
        var cmdEmotionTopic = new ROSLIB.Topic({
          ros: this.$ros,
          name: "/cyborg_controller/set_emotional_state",
          messageType: "std_msgs/String"
        });
        var emotionVal = new ROSLIB.Message({
          data: command
        });
        cmdEmotionTopic.publish(emotionVal);
      } else if (action == "emotionswitch") {
        var cmdEmotionswitchTopic = new ROSLIB.Topic({
          ros: this.$ros,
          name: "/cyborg_controller/emotional_controller",
          messageType: "std_msgs/String"
        });
        var emotionswitchVal = new ROSLIB.Message({
          data: command
        });
        cmdEmotionswitchTopic.publish(emotionswitchVal);
      } else {
        alert("please use commands: event, speech, emotion or emotionswitch.");
      }
    }
  },
  created() {
    this.rosOutTopic = new ROSLIB.Topic({
      ros: this.$ros,
      name: "/cyborg_controller/state_transitions",
      messageType: "std_msgs/String"
    });
    this.rosOutTopic.subscribe(function(msg) {
      var dict = JSON.parse(msg.data);
      var textArea = document.getElementById("textareaCommandTool");
      textArea.innerHTML = "";
      for (var key in dict) {
        // check if the property/key is defined in the object itself, not in parent
        if (key in dict) {
          textArea.innerHTML += key + " → " + dict[key] + "\n";
        }
      }
    });
  },
  mounted() {},
  destroyed() {
    this.rosOutTopic.unsubscribe();
  }
};
</script>

<style scoped>
h5 {
  font-weight: bold;
}
.box {
  background-color: white;
  /* -webkit-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px; */
  /* -webkit-box-shadow: rgba(0, 0, 0,.30) 0 2px 3px; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /*Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5*/
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /* Firefox 3.5 - 3.6 */
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.inset-b-border {
  border-bottom-style: inset;
}
</style>
