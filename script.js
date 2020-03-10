// class of photobooth
    // constructor
        // declare variables for whether effects play
            // red effect
            // green screen
            // split effect
        // variables for
            // canvas
            // context
            // strip
            // !todo: snap
            // shudder
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