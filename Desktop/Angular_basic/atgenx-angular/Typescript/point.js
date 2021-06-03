"use strict";
exports.__esModule = true;
exports.PointClass = void 0;
var PointClass = /** @class */ (function () {
    function PointClass(x, y, z) {
        var _this = this;
        this.drawPoint = function () {
            // ... draws point
            console.log(_this.x, _this.y, _this.z);
        };
        this.calculatePointDistance = function (anotherPoint) {
            // ... calcualtes point distance
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    PointClass.prototype.getX = function () {
        return this.x;
    };
    return PointClass;
}());
exports.PointClass = PointClass;
