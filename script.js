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
        this.getVideo();
        this.video.addEventListener("canplay", () => {
            this.paintToCanvas();
        });
    }
    takePhoto(){
        // console.log("Say CHEEEESSEE!");
        const data = this.canvas.toDataURL('image/jpg');
        const link = document.createElement('a');
        link.href = data;
        link.setAttribute("download","Beast");
        link.textContent = "Download Image";
        link.innerHTML = `<img src="${data}" alt="A tough beast"/>`;
        this.strip.insertBefore(link, this.strip.firstChild);
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
    getVideo(){
        // get video from our devices
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then(localMediaStream => {
            this.video.srcObject = localMediaStream;
            this.video.play();
        })
        .catch(error => {
            console.error("they don't want video", error);
        })
    }

    // paint to canvas function
    paintToCanvas(){
        const width = this.video.videoWidth;
        const height = this.video.videoHeight;
        this.canvas.width = width;
        this.canvas.height = height;

        return setInterval(() => {
            // draw video onto context
            this.ctx.drawImage(this.video,0,0,width,height);
            // extract the pixel data
            let pixels = this.ctx.getImageData(0,0,width,height);
            if (this.red == true) {
                // send the pixel data to red effect
                pixels = this.redEffect(pixels);
            }
            // put the modified pixed onto the screen
            this.ctx.putImageData(pixels,0,0);
        }, 16)
    }
    redEffect(pixels){
        for (let i = 0; i < pixels.data.length; i+= 4) {
            // red
            pixels.data[i] = pixels.data[i] + 200;
            // green
            pixels.data[i+1] = pixels.data[i+1] -45;
            // blue
            pixels.data[i+2] = pixels.data[i+2] *0.5;
            // alpha
            pixels.data[i+3];
        }
        return pixels;
    }
        // set width and height of the video and canvas
        // run a set interval
            // will draw the video on to the canvas
            // will check if an effect is present, if so, grab the pixels
                // add the effect to the pixels, then put the pixels on the context
}

let photo = new Photobooth();
