<template>
  <div id="home" class="homebg">
    <b-container>
      <b-row align-h="center" class="pt-3">
        <b-col class="box mr-2">
          <b-row>
            <b-col class="m-2 box2 d-flex align-items-center justify-content-center">
              <modeButtons></modeButtons>
            </b-col>
            <b-col class="m-2 box2 d-flex align-items-center justify-content-center">
              <SMACHStateCards></SMACHStateCards>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="m-2 box2">
              <commandTool></commandTool>
            </b-col>
            <b-col class="m-2 box2 d-flex flex-column align-items-center justify-content-center">
                <emotionCards></emotionCards>
                <ariaCards></ariaCards>
                <etcCards></etcCards>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="box ml-2">
          <debugConsole numRows="26"></debugConsole>
        </b-col>
      </b-row>
    </b-container>
    <welcomeFooter></welcomeFooter>
  </div>
</template>
<script>
import modeButtons from "../components/home/modeButtons";
import SMACHStateCards from "../components/home/SMACHStateCards";
import commandTool from "../components/home/commandTool";
import emotionCards from "../components/home/emotionCards";
import ariaCards from "../components/home/ariaCards";
import etcCards from "../components/home/etcCards";
import welcomeFooter from "../components/home/welcomeFooter";
import debugConsole from "../components/shared/debugConsole";
export default {
  name: "Home",
  components: {
    modeButtons,
    debugConsole,
    SMACHStateCards,
    commandTool,
    emotionCards,
    ariaCards,
    etcCards,
    welcomeFooter
  }
};
</script>
<style scoped>
.homebg {
  background-color: #f3f3f3;
}
.box {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /*Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5*/
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /* Firefox 3.5 - 3.6 */
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.box:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.box2 {
  background-color: white;
  /* -webkit-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px; */
  /* -webkit-box-shadow: rgba(0, 0, 0,.30) 0 2px 3px; */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /*Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5*/
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); /* Firefox 3.5 - 3.6 */
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24); /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.box2:hover {
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.4);
}
</style>