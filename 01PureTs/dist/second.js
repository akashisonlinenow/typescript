"use strict";
class Insta {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Utube {
    constructor(cameraMode, filter, burst, shorts // u can add something extra if u want while implementing
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        console.log("story was created");
    }
}
