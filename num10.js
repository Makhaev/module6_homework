// 2 задание

function isPrime(num) {
    if (num > 1000) return "данные неверны";
    for (let i = 2; i <= num; i++)
        if (num % i === 0) return "непростое число";
    return "простое число";
}
console.log(isPrime(1));