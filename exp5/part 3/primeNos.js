function* generatePrimes(limit) {
    // Simplified version of the isPrime function
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) yield num;
    }
}

function getLimitFromCommandLine() {
    const args = process.argv.slice(2);
    const limit = Number(args[0]);

    if (isNaN(limit) || limit <= 1) {
        console.error('Error: Please provide a valid limit greater than 1.');
        process.exit(1);
    }

    return limit;
}

function main() {
    const limit = getLimitFromCommandLine();
    console.log(`Prime numbers up to ${limit}:`);
    
    // Using generator to print prime numbers
    for (const prime of generatePrimes(limit)) {
        console.log(prime);
    }
}

main();
