# Prime Number Checker
## 📌 Project Overview

This program checks whether a given number is prime or not. For numbers between 1 and 50, the program prints *“Yes”* if the number is prime and *“No”* otherwise.

## 🧠 How It Works

### Definition of Prime Numbers

A prime number has exactly two factors:

1 and the number itself.

Example: 7 is prime because it can only be divided by 1 and 7 with no remainder.

### Basic Rules

If n < 2, the number is not prime (since 0 and 1 are not primes).

If n is divisible by any number other than 1 and itself, it is not prime.

### Efficient Check (Square Root Method)

Instead of checking all numbers up to n, we only check divisibility up to √n.

Reason: if n = a × b, then one of a or b must be ≤ √n.

This reduces unnecessary calculations and makes the code more efficient.

## 🔄 Pseudocode
For each n from 1 to 50 do:
    if n < 2 then 
        print "no"
    else
        let isPrime = True
        For i = 2 to sqrt(n) do:
            if n % i == 0 then
                let isPrime = False
                break
        if isPrime then
            print "yes"
        else
            print "no"

## 🚀 Example Output
1 → No  
2 → Yes  
3 → Yes  
4 → No  
5 → Yes  
...  

## ✨ What I Learned

How to define and test prime numbers.

Why checking up to √n is enough.

How to improve a brute-force algorithm to make it more efficient.
