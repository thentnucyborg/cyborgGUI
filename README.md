# CyborgGUI

This repository contains the CyborgGUI source code. The CyborgGUI is a web app developed using Vue to control and monitor the robot body. Together with the Commander ROS node in the CyborgRobot repository, these two components make the cyborg GUI Module. The Vue App uses Vue single-File components which are files with the .vue extension that contain Vue-variants of HTML, CSS and JS code. Azure is used to host and continuously deploy the web app from this repo using Kudu build service. The contents of the 'dist' folder is what is deployed, this can be changed by modifying the .deployment file. Please go through [Vue Tutorial](https://vuejs.org/v2/guide/) when developing the app.


## Project setup
```
clone repo
npm install
```
### Run Vue UI
The UI is intuitive to use to serve, build and lint the project.
```
vue ui --dev
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
