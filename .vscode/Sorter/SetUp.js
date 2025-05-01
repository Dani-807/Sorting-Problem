function setup() {

    createCanvas(windowWidth, windowHeight); // 400 x 400 pixel canvas
    
    // Text Properties
    textAlign(CENTER,CENTER); // Aligns text in center
    textSize(32);

    // Create input1, input2, and button
    input1 = createInput();
    input1.position(width / 2 - 50, 250);
    input1.size(70);

    input2 = createInput();
    input2.position(width / 2 + 50, 250);
    input2.size(70);

    button = createButton("CLICK TO KNOW");
    button.position(width / 2, 300);
    button.mousePressed(releaseThePrimes);
}

function draw() {
    
    background(0); // Black background

    if (!showPrimes) {
        fill(255);
        text("Know the primes between:", width / 2 + 50, 150);
        return;
    }

    if (frameCount - lastU >= delayFR && cn <= endN) { // This makes sure the message actually stays long enough to read

        if (checkPrime(cn)) {
            message = cn + ":PRIME!!";
            fill("lime");
        } else {
            message = cn + ":NOT PRIME!!😱";
            fill("red");
        }

        lastU = frameCount;
        cn++; 
            
    }
    
    // Show the final message
    if (cn > endN && frameCount - lastU >= delayFR) {
        message ="Congrats you survived the Primes!!";
        fill(225);
        textSize(24);

        // Restart
        if (!restart) {
            restart = createButton("Try Again");
            restart.position(width / 2, height - 300);
            restart.mousePressed(reset);
        }

        noLoop(); // Exit the draw loop 
}

text(message, width / 2, height /2);

}

function reset() {

    // Reset thingy for the restart thingy
    // It does what it says it basically resets everything

    showPrimes = false;
    message = "";
    cn;
    endN;
    restart.remove(); // Removes the button
    restart = null;

    // It shows everything (start at least) again
    input1.show();
    input2.show();
    button.show();
    
    loop(); // Restarts the draw loop

}