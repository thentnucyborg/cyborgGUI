(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Map"],{"0f19":function(t,e,s){},"4bb4":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"homebg",attrs:{id:"map"}},[s("b-container",{staticStyle:{"max-width":"1400px"}},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"m-3 box txtcenter"},[s("navigationMap")],1),s("b-col",{staticClass:"m-3 box"},[s("debugConsole",{attrs:{numRows:"26"}})],1)],1)],1)],1)},a=[],o=s("8f64"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pb-3",attrs:{id:"navigationMap"}},[s("b-row",{staticClass:"my-1"},[s("b-col",{staticStyle:{"text-align":"center"}},[s("b-form",{attrs:{inline:""}},[s("b-button",{attrs:{pressed:t.toggleInitPose,variant:"primary"},on:{"update:pressed":function(e){t.toggleInitPose=e}}},[t._v("Toggle Initial Pose")]),s("span",{staticClass:"mx-1"},[t._v("Initial Pose:")]),s("strong",[s("span",{attrs:{id:"poseToggle"}},[t._v(t._s(t.toggleInitPose))])])],1)],1),s("b-col",{staticStyle:{"text-align":"end"}},[s("span",{staticClass:"mx-1"},[t._v("x: "+t._s(t.x_cord)+" y: "+t._s(t.y_cord))]),s("span",{staticClass:"mx-1"},[t._v("r: "+t._s(t.r_red)+" g: "+t._s(t.g_green)+" b: "+t._s(t.b_blue))])])],1),s("div",{attrs:{id:"mapDiv","align-h":"center"}}),s("b-row",[s("b-col",{staticStyle:{"text-align":"center"}},[s("b-form",{attrs:{inline:""}},[s("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.setMotors("ON")}}},[t._v("MOTORS ON")]),s("b-button",{staticClass:"ml-1",attrs:{variant:"danger"},on:{click:function(e){return t.setMotors("OFF")}}},[t._v("MOTORS OFF")]),s("span",{staticClass:"mx-1"},[t._v("Motors:")]),s("strong",[t.toggleMotors?s("span",[t._v("ON")]):s("span",[t._v("OFF")])])],1)],1)],1)],1)},i=[],c=s("e86b"),l=s.n(c),g={name:"navigationMap",data:function(){return{toggleInitPose:!1,x_cord:0,y_cord:0,r_red:0,g_green:0,b_blue:0,toggleMotors:"-"}},methods:{setMotors:function(t){var e,s=this,n=new l.a.ServiceRequest({});"ON"==t?(e=new l.a.Service({ros:this.$ros,name:"/RosAria/enable_motors",serviceType:"std_srvs/Empty"}),e.callService(n,(function(t){console.log(t),s.toggleMotors=!0}))):"OFF"==t?(e=new l.a.Service({ros:this.$ros,name:"/RosAria/disable_motors",serviceType:"std_srvs/Empty"}),e.callService(n,(function(t){console.log(t),s.toggleMotors=!1}))):alert("Could not turn Motors on or off")}},mounted:function(){var t=this,e=620,s=620,n=new ROS2D.Viewer({divID:"mapDiv",width:e,height:s}),a=(new NAV2D.OccupancyGridClientNav({ros:this.$ros,rootObject:n.scene,viewer:n,withOrientation:!0,serverName:"/move_base",image:"../img/pioneerlxmodel.png"}),document.querySelector("#mapDiv canvas")),o=n.scene;o.addEventListener("stagemousemove",(function(e){t.x_cord=Math.round(e.stageX),t.y_cord=Math.round(e.stageY);var s=a.getContext("2d"),n=s.getImageData(e.stageX,e.stageY,1,1).data;t.r_red=n[0],t.g_green=n[1],t.b_blue=n[2]}))}},u=g,v=(s("6e16"),s("2877")),d=Object(v["a"])(u,r,i,!1,null,"174c22d3",null),b=d.exports,m={name:"Map",components:{debugConsole:o["a"],navigationMap:b}},_=m,p=(s("6162"),Object(v["a"])(_,n,a,!1,null,"6c7e275f",null));e["default"]=p.exports},6162:function(t,e,s){"use strict";var n=s("0f19"),a=s.n(n);a.a},"6e16":function(t,e,s){"use strict";var n=s("a250"),a=s.n(n);a.a},a250:function(t,e,s){}}]);
//# sourceMappingURL=Map.8f4e09c4.js.map