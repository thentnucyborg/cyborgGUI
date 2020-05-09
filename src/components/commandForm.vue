<template>
  <div id="commandForm">
    <b-form inline class="my-1" >Command Tool: 
        <b-button
      class="mx-2"
      v-b-popover.hover.top="'How to use command tool'"
      v-b-modal.modal-1
      variant="outline-primary"
      size="sm">
      <span class="fas fa-question-circle fa-lg"></span>
    </b-button>
    </b-form>
    <b-modal size="xl" id="modal-1" title="Instructions for using command tool">
    <p class="mb-2">The command tool have the following actions:</p>
    <h5> event </h5>
    &#8227; <b>Topic</b>: "/cyborg_controller/state_change". <br>
    &#8227; <b>msg type</b>: "cyborg_controller/SystemState". <br>
    &#8227; <b>Example</b>: <i>action</i>: "event" , <i>command</i>:  "start". <br>
    &#8227; <b>Info</b>: 
    The <b><i>event</i></b> action is used to change the SMACH <i>SystemState</i>.
    In the example we change from state <i>suspension</i> to state <i>idle</i>. The only possible transition from state <i>suspension</i> to state <i>idle</i> is "start".<br>
        <h5> event </h5>
    &#8227; <b>Topic</b>: "/cyborg_controller/state_change". <br>
    &#8227; <b>msg type</b>: "cyborg_controller/SystemState". <br>
    &#8227; <b>Example</b>: <i>action</i>: "event" , <i>command</i>:  "start". <br>
    &#8227; <b>Info</b>: 
    The <b><i>event</i></b> action is used to change the <i>SMACH SystemState</i>.
    In the example we change from state <i>suspension</i> to state <i>idle</i>. The only possible transition from state <i>suspension</i> to state <i>idle</i> is "start".<br>
        <h5> event </h5>
    &#8227; <b>Topic</b>: "/cyborg_controller/state_change". <br>
    &#8227; <b>msg type</b>: "cyborg_controller/SystemState". <br>
    &#8227; <b>Example</b>: <i>action</i>: "event" , <i>command</i>:  "start". <br>
    &#8227; <b>Info</b>: 
    The <b><i>event</i></b> action is used to change the <i>SMACH SystemState</i>.
    In the example we change from state <i>suspension</i> to state <i>idle</i>. The only possible transition from state <i>suspension</i> to state <i>idle</i> is "start".<br>
        <h5> event </h5>
    &#8227; <b>Topic</b>: "/cyborg_controller/state_change". <br>
    &#8227; <b>msg type</b>: "cyborg_controller/SystemState". <br>
    &#8227; <b>Example</b>: <i>action</i>: "event" , <i>command</i>:  "start". <br>
    &#8227; <b>Info</b>: 
    The <b><i>event</i></b> action is used to change the <i>SMACH SystemState</i>.
    In the example we change from state <i>suspension</i> to state <i>idle</i>. The only possible transition from state <i>suspension</i> to state <i>idle</i> is "start".<br>

    
  </b-modal>
    <b-form>
      <b-form-group id="group1" label="Your action:" label-for="input-1">
        <b-form-input id="input-1" required placeholder="Enter action"></b-form-input>
      </b-form-group>
    </b-form>
    <b-form>
      <b-form-group id="group2" label="Your command:" label-for="input-2">
        <b-form-input id="input-2" required placeholder="Enter command"></b-form-input>
      </b-form-group>
    </b-form>
    <b-button type="submit" variant="primary">Submit</b-button>
  </div>
</template>

<script>
// import ROSLIB from "roslib";
export default {
  name: "commandForm",
  data() {
      return {

      }
  }
//   created() {},
//   mounted() {},
//   destroyed() {}
};
</script>

<style scoped>
h5{
    font-weight: bold;
}
/* .smallerp {
    font-size: 5px;
} */
</style>>
