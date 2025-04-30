// This function returns true if n is a prime number
// If its not a prime number it returns false
// Kind of like what the pseudocode says

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    // Loop
    for (let i = 2; i <= Math.sqrt(n); i++) {

        // loops from 2 up to square root of n
        if (n % i === 0) {

            // if any i divides n evenly its not prime
            return false;
        }
        
    }

    // if no divisors are found it prime
    return true; // Should be outside of for loop because it runs after loop finishes

}