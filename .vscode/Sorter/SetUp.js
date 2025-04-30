function setup() {

    createCanvas(400, 400); // 400 x 400 pixel canvas
    background(220); // light gray background

    // black text of size 16
    textSize(16);
    fill(0);

    let y = 20; // Starting vertical position for text

    // Loop
    for (let n = 1; n <= 50; n++) {

        let isPrime = isPrime(n); 

        let answer = isPrime ? "YES" : "NO" ;
        text(n + ": " + answer, 20, y);

        y += 20; // Move each answer down to the next line
    
    }
}