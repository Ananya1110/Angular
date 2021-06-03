"use strict";
exports.__esModule = true;
var point_1 = require("./point");
function log(message) {
    console.log("Message :", message);
}
var message = "Hello Typescript";
log(message);
var count = '5';
count = 'X';
var numberVar = 5;
var boolVar = true;
var strVar = "abcd";
var anyVar = null;
var numberArray = [1, 2, 3, 4];
console.log(count);
var drawPoint = function (point) {
    // ... draws point
    console.log(point.x, point.y, point.z);
};
var calculatePointDistance = function (point1, point2) {
    // ... draws point
};
var pointt = { x: 1, y: 2, z: 3 };
drawPoint(pointt);
var point = new point_1.PointClass(5, 6, 7);
point.drawPoint();
