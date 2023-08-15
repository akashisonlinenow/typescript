interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Insta implements TakePhoto { // if u r implementing then all feautures of TakePhoto must be there
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Utube implements TakePhoto, Story { // if u r implementing then all feautures of TakePhoto must be there
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shorts: string  // u can add something extra if u want while implementing
    ){}

    createStory(): void {   // if utube wants to Story too then this is done compulsorily
        console.log("story was created")
    }
}