<template>
  <div id="home" class="homebg">
    <div></div>
    <b-container>
      <b-row align-h="center" class="pt-3">
        <b-col class="box mr-2">
          <modeButtons></modeButtons>
        </b-col>
        <b-col class="box ml-2">
           <div>
               <debugConsole></debugConsole>
                <!-- <label for="exampleFormControlTextarea1">Debug</label>
                <b-form-textarea class="form-control" id="formControlTextarea1" rows="16" spellcheck="false" readonly disabled style="margin-top: 0px; margin-bottom: 0px;"></b-form-textarea> -->
            </div>
        </b-col>
      </b-row>
    </b-container>
  <div class="intro-lead-in">Welcome to the Cyborg Website</div>
  <div class="intro-heading text-uppercase">The Cyborg v4.0</div>
  <b-modal id="modal1" title="Forgot Password">
      <b-img src="https://ih0.redbubble.net/image.418429827.6579/ap,550x550,12x16,1,transparent,t.u4.png" fluid alt="Responsive image" />
    </b-modal> 
    <!-- <p>{{ message }}</p>  -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>
<script>

// import Vue from 'vue'

// var home = new Vue({
//   el: '#home',
//   data: {
//     message: 'Hello Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })


// import ROSLIB from 'roslib'
// var ros = new ROSLIB.Ros({
//       url: "ws://localhost:9090"
// });
// var setBehaviour = new Vue({
//   el: '#home',
//   methods: {
//     SetBehaviour: function () {
//     var cmdBehaviour = new ROSLIB.Topic({
//       ros: ros,
//       name: '/cyborg_commander/robot_mode',
//       messageType: 'std_msgs/String'
//     });
//     var behaviourVal = new ROSLIB.Message({
//       data: val
//     });
//       cmdBehaviour.publish(behaviourVal);
//     }
//   }
// })



// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import MapComponent from "@/components/MapComponent.vue";
// window.onload = function () {
// var example1 = new Vue.component({
//   el: 'example-1',
//   data: {
//     counter: 0
//   }
// })
// }
import modeButtons from '../components/modeButtons'
import debugConsole from '../components/debugConsole'
export default {
  name: "Home",
  components: {
    modeButtons,
    debugConsole
    // HelloWorld
  }
}
</script>
<style scoped>
 .intro-lead-in {
    font-size: 1.5rem;
    font-style: italic;
    font-family: 'Droid Serif'
 }

  .intro-heading {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }
  .homebg {
    background-color :  #f3f3f3;
  } 
  .box {
    background-color : white;
    /* -webkit-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px; */
  /* -webkit-box-shadow: rgba(0, 0, 0,.30) 0 2px 3px; */
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); /*Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5*/
    -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);/* Firefox 3.5 - 3.6 */
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);/* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
  .box:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.22);
  }
</style>