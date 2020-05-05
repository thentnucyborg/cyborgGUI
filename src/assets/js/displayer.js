var txtBatteryStatus = document.getElementById("txtBattery");
var txtMotors = document.getElementById("txtMotorsstate");

function initDisplayer() {
  // setInterval(GetBatteryStatus, 1000);
  // setInterval(GetMotorsState, 1000);

  var systemStateTopic = new ROSLIB.Topic({
    ros: ros,
    name: "/cyborg_controller/state_change",
    messageType: "cyborg_controller/SystemState"
  });

  systemStateTopic.subscribe(function(msg) {
    Math.Round;
    document.getElementById("txtSMACHEvent").innerHTML = msg.event;
    document.getElementById("txtPrevSMACHState").innerHTML =
      msg.from_system_state;
    document.getElementById("txtCurrSMACHState").innerHTML =
      msg.to_system_state;
  });

  var emotionalStateTopic = new ROSLIB.Topic({
    ros: ros,
    name: "/cyborg_controller/emotional_state",
    messageType: "cyborg_controller/EmotionalState"
  });

  emotionalStateTopic.subscribe(function(msg) {
    document.getElementById("txtPrevEmotionalState").innerHTML =
      msg.from_emotional_state;
    document.getElementById("txtCurrEmotionalState").innerHTML =
      msg.to_emotional_state;
    document.getElementById(
      "txtPleasure"
    ).innerHTML = msg.current_pleasure.toFixed(4);
    document.getElementById(
      "txtArousal"
    ).innerHTML = msg.current_arousal.toFixed(4);
    document.getElementById(
      "txtDominance"
    ).innerHTML = msg.current_dominance.toFixed(4);
  });

  var motorStateTopic = new ROSLIB.Topic({
    ros: ros,
    name: "/RosAria/motors_state",
    messageType: "std_msgs/Bool"
  });

  motorStateTopic.subscribe(function(msg) {
    if (msg.data == true) {
      document.getElementById("txtMotorsState").innerHTML = "ON";
    } else {
      document.getElementById("txtMotorsState").innerHTML = "OFF";
    }
  });

  var behaviourStateTopic = new ROSLIB.Topic({
    ros: ros,
    name: "/cyborg_commander/robot_mode",
    messageType: "std_msgs/Bool"
  });

  behaviourStateTopic.subscribe(function(msg) {
    if (msg.data == true) {
      document.getElementById("txtBehaviourState").innerHTML = "ON";
    } else {
      document.getElementById("txtBehaviourState").innerHTML = "OFF";
    }
  });

  var rosOutTopic = new ROSLIB.Topic({
    ros: ros,
    name: "/rosout",
    messageType: "rosgraph_msgs/Log"
  });
  var textArea = document.getElementById("formControlTextarea1");
  rosOutTopic.subscribe(function(msg) {
    document.getElementById("formControlTextarea1").innerHTML += msg.msg + "\n";
    textArea.scrollTop = textArea.scrollHeight;
  });

  // const sdk = new ChartsEmbedSDK({
  //     baseUrl: 'https://charts.mongodb.com/charts-project-0-lfzml'
  //   });

  // const chart = sdk
  //   .createChart({
  //     chartId: '3d17ce32-9fd9-4da3-9025-3bd1722f873c',
  //     width: 500,
  //     height: 500,
  //     refreshInterval: 300
  // });
  // chart.render(document.getElementById('chart'));
  // let myChart = document.getElementById('myChart').getContext('2d');

  // Global Options
  // Chart.defaults.global.defaultFontFamily = 'Lato';
  // Chart.defaults.global.defaultFontSize = 18;
  // Chart.defaults.global.defaultFontColor = '#777';

  // let massPopChart = new Chart(myChart, {
  //   type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  //   data:{
  //     labels:['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
  //     datasets:[{
  //       label:'Population',
  //       data:[
  //         617594,
  //         181045,
  //         153060,
  //         106519,
  //         105162,
  //         95072
  //       ],
  //       backgroundColor:'green',
  //       backgroundColor:[
  //         'rgba(255, 99, 132, 0.6)',
  //         'rgba(54, 162, 235, 0.6)',
  //         'rgba(255, 206, 86, 0.6)',
  //         'rgba(75, 192, 192, 0.6)',
  //         'rgba(153, 102, 255, 0.6)',
  //         'rgba(255, 159, 64, 0.6)',
  //         'rgba(255, 99, 132, 0.6)'
  //       ],
  //       borderWidth:1,
  //       borderColor:'#777',
  //       hoverBorderWidth:3,
  //       hoverBorderColor:'#000'
  //     }]
  //   },
  //   options:{
  //     title:{
  //       display:true,
  //       text:'Largest Cities In Massachusetts',
  //       fontSize:25
  //     },
  //     legend:{
  //       display:true,
  //       position:'right',
  //       labels:{
  //         fontColor:'#000'
  //       }
  //     },
  //     layout:{
  //       padding:{
  //         left:50,
  //         right:0,
  //         bottom:0,
  //         top:0
  //       }
  //     },
  //     tooltips:{
  //       enabled:true
  //     }
  //   }
  // });
}

// function GetBatteryStatus() {
//     $.ajax({
//         type: "GET",
//         /*.net Core may require authentication token, the one below worked for chrome. Not needed in this version of code.*/
//         // headers: { "RequestVerificationToken": $('input[name="__RequestVerificationToken"]').val() },
//         url: "/Caller?handler=BatteryStatus",
//         dataType: "json",

//         success: function(msg) {
//             // console.info("battery status: " + msg);
//             txtBatteryStatus.innerHTML = msg;
//         },
//         failure: function(response) {
//             // console.log("failure: could not get battery status, response: " + response);
//         },
//         error: function(response) {
//             // console.error("error: could not get battery status, response: " + response);
//         }
//     });
// }

// function GetMotorsState() {
//     $.ajax({
//         type: "GET",

//         /*.net Core may require authentication token, the one below worked for chrome. Not needed in this version of code.*/
//         // headers: { "RequestVerificationToken": $('input[name="__RequestVerificationToken"]').val() },

//         url: "/Caller?handler=MotorsState",
//         dataType: "json",
//         success: function(msg) {
//             // console.info("Motors state: " + msg);
//             if (msg == "True") {
//                 txtMotors.innerHTML = "ON";
//             } else {
//                 txtMotors.innerHTML = "OFF";
//             }
//         },
//         failure: function(response) {
//             // console.log("failure: could not get motors state, response: " + response);
//         },
//         error: function(response) {
//             // console.error("error: could not get motors state, response: " + response);
//         }
//     });
// }
