/*Writes websocket server status to console log*/
function initPublisher() {
  ros.on("connection", function() {
    console.log("Connected to websocket server.");
  });

  ros.on("error", function(error) {
    console.log("Error connecting to websocket server: ", error);
  });

  ros.on("close", function() {
    console.log("Connection to websocket server closed.");
  });
}

/*Called by 'start robot' and 'stop robot' buttons*/
function SetBehaviour(val) {
  var cmdBehaviour = new ROSLIB.Topic({
    ros: ros,
    name: "/cyborg_commander/robot_mode",
    messageType: "std_msgs/String"
  });

  var behaviourVal = new ROSLIB.Message({
    data: val
  });
  cmdBehaviour.publish(behaviourVal);
}

function StartMotors() {
  var enableMotors = new ROSLIB.Service({
    ros: ros,
    name: "/RosAria/enable_motors",
    serviceType: "std_srvs/Empty"
  });

  var request = new ROSLIB.ServiceRequest({});
  enableMotors.callService(request, function(result) {});
}

function StopMotors() {
  var disableMotors = new ROSLIB.Service({
    ros: ros,
    name: "/RosAria/disable_motors",
    serviceType: "std_srvs/Empty"
  });

  var request = new ROSLIB.ServiceRequest({});
  disableMotors.callService(request, function(result) {});
}

// async.retry({times: 15, interval: 200}, setBehaviour, function(val, err, result) {
// });

// function rosTopics() {
//     var ros = new ROSLIB.Ros({
//         url: 'ws://localhost:9090'
//     })
//     var cmdVel = new ROSLIB.Topic({
//         ros: ros,
//         name: '/Cmd_vel',
//         messageType: 'geometry_msgs/Twist'
//     });

//     var twist = new ROSLIB.Message({
//         linear: {
//             x: 0.1,
//             y: 0.2,
//             z: 0.3
//         },
//         angular: {
//             x: -0.1,
//             y: -0.2,
//             z: -0.3
//         }
//     });
//     cmdVel.publish(twist);

//     ROSLIB.Ros.prototype.getTopics = function(callback) {
//         var topicsClient = new ROSLIB.Service({
//             ros: ros,
//             name: '/rosapi/topics',
//             serviceType: 'rosapi/Topics'
//         });

//         var request = new ROSLIB.ServiceRequest();

//         topicsClient.callService(request, function(result) {
//             callback(result.topics);
//         });
//     };
//     console.log(ROSLIB.Ros.prototype.getTopics());
// }
