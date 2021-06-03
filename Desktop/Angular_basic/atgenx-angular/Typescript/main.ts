import { PointClass } from './point'
function log(message) {
    console.log("Message :", message);
}
var message = "Hello Typescript";
log(message);
let count: string = '5';
count = 'X';

let numberVar: number = 5;
let boolVar: boolean = true;
let strVar: string = "abcd";
let anyVar: any = null;
let numberArray: number[] = [1,2,3,4];


console.log(count);
interface Point {
    x: number,
    y: number,
    z: number
}
let drawPoint = (point: Point) => {
    // ... draws point
    console.log(point.x,point.y,point.z)
}
let calculatePointDistance = (point1: Point, point2: Point) => {
    // ... draws point
}
let pointt: Point = {x: 1, y: 2, z: 3};
drawPoint(pointt)
let point: PointClass = new PointClass(5,6,7);
point.drawPoint();

