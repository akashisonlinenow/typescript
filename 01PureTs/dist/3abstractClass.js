"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calc done
        return 8;
    }
}
// const ak = new TakePhoto("test", "Test") // u cant create an object for abstract class
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); // Constructors for derived classes must contain a 'super' call.
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
// const ak = new Insta("test", "Test") // but u can create object of any class which is inheriting the abstract class
const ak = new Insta("test", "Test", 3);
ak.getReelTime();
