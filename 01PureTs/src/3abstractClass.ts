abstract class TakePhoto {  
    constructor (
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia (): void
    getReelTime(): number {
        // some complex calc done
        return 8
    }
}

// const ak = new TakePhoto("test", "Test") // u cant create an object for abstract class

class Insta extends TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter) // Constructors for derived classes must contain a 'super' call.
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

// const ak = new Insta("test", "Test") // but u can create object of any class which is inheriting the abstract class
const ak = new Insta("test", "Test", 3)
ak.getReelTime() 