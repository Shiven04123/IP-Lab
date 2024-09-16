function* generatePrimes(limit) {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
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
    const primeGenerator = generatePrimes(limit);

    console.log(`Prime numbers up to ${limit}:`);
    for (const prime of primeGenerator) {
        console.log(prime);
    }
}

main();
