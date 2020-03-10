// class of photobooth
class Photobooth{
    // constructor
    constructor(){
        this.red = false;
        this.split = false;
        this.greenScreen = false;
        this.video = document.querySelector(".player");
        this.canvas = document.querySelector(".photo");
        this.ctx = this.canvas.getContext('2d');
        this.strip = document.querySelector(".strip");
        this.shutter = document.querySelector("#camButton");
        // *control buttons for effects bellow
        this.redBtn = document.querySelector("#redEffect");
        this.splitBtn = document.querySelector("#splitEffect");
        this.greenScreenBtn = document.querySelector("#greenScreenEffect");
        // adding listeners to our effects button
        this.redBtn.addEventListener("click", () => {
            this.red = !this.red;
            this.split = false;
            this.greenScreen = false;
            console.log(`red: ${this.red}`);
            
        });
        this.splitBtn.addEventListener("click", () => {
            this.red = false;
            this.split = !this.split;
            this.greenScreen = false;
            console.log(`split: ${this.split}`);
        });
        this.greenScreenBtn.addEventListener("click", () => {
            this.red = false;
            this.split = false;
            this.greenScreen = !this.greenScreen;
            console.log(`green screen: ${this.greenScreen}`);
        });
        // *the button for the camera
        this.shutter.addEventListener("click", () => this.takePhoto());
    }
    takePhoto(){
        console.log("Say CHEEEESSEE!");
        
    }
        // declare variables for whether effects play
            // red effect
            // green screen
            // split effect
        // variables for
            // canvas
            // context
            // strip
            // !todo: snap
            // shutter
        // set up button for adding effects
            // turn on wanted effect, turn off other effects
                // use for greenscreen, red and split
        // set up a button to take a photo from our video feed
        // video tag will listen for "canplay"
            // will call paintToCanvas

    // getVideo function
        // get video from our devices

    // paint to canvas function
        // set width and height of the video and canvas
        // run a set interval
            // will draw the video on to the canvas
            // will check if an effect is present, if so, grab the pixels
                // add the effect to the pixels, then put the pixels on the context
}

let photo = new Photobooth();
