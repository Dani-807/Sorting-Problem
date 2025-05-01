// This function returns true if n is a prime number
// If its not a prime number it returns false
// Kind of like what the pseudocode says
// Stays the same cus its the algorithm

function releaseThePrimes() {

    // Read inputs
    let f = parseInt(input1.value()); // parseInt turns whatever into a real number
    let t = parseInt(input2.value());
    
    // Check if numbs are valid
    if(isNaN(f) || isNaN(t) || f >= t) {
        alert("Please enter a valid range of numbers (start < end). Thank you.");
        return;
    }

    // Hide the boxes and button
    input1.hide();
    input2.hide();
    button.hide();

    // Start the draw
    cn = f;
    endN = t;
    showPrimes = true;
    message = "";
    lastU = frameCount;
    loop(); // Incase it stops drawing it restarts

}


function checkPrime(n) {
    if (n === 2 || n  === 5) return true;
    if (n < 2 || n % 2 === 0 || n % 5 === 0) return false;

    // Loop
    for (let i = 3; i <= Math.sqrt(n); i += 2) {

        // loops from 2 up to square root of n
        if (n % i === 0) {

            // if any i divides n evenly its not prime
            return false;
        }
        
    }

    // if no divisors are found it prime
    return true; // Should be outside of for loop because it runs after loop finishes

}