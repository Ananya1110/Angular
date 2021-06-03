export class PointClass {
    private x: number;
    public y: number;
    z: number;
    constructor(x: number, y: number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    drawPoint = () => {
        // ... draws point
        console.log(this.x,this.y,this.z);
    }
    calculatePointDistance = (anotherPoint: PointClass) => {
        // ... calcualtes point distance
    }

    getX(){
        return this.x;
    }
}
