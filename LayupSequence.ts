// 1. Recursive Without Memoization
function computeSRecursiveNaive(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (n % 2 === 0) {
        return computeSRecursiveNaive(n - 1) + computeSRecursiveNaive(n - 2);
    } else {
        return 2 * computeSRecursiveNaive(n - 1) - computeSRecursiveNaive(n - 2);
    }
}

// 2. Recursive With Memoization
function computeSRecursiveMemoized(n: number, memo: Map<number, number> = new Map()): number {
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (memo.has(n)) return memo.get(n)!;

    let result: number;
    if (n % 2 === 0) {
        result = computeSRecursiveMemoized(n - 1, memo) + computeSRecursiveMemoized(n - 2, memo);
    } else {
        result = 2 * computeSRecursiveMemoized(n - 1, memo) - computeSRecursiveMemoized(n - 2, memo);
    }

    memo.set(n, result);
    return result;
}

// 3. Iterative Implementation
function computeSIterative(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let prev2 = 1; // S(n-2)
    let prev1 = 2; // S(n-1)
    let current = 0;

    for (let i = 3; i <= n; i++) {
        if (i % 2 === 0) {
            current = prev1 + prev2;
        } else {
            current = 2 * prev1 - prev2;
        }

        prev2 = prev1;
        prev1 = current;
    }

    return current;
}

// Performance Measurement
function measureRuntime(func: (n: number) => number, n: number): number {
    const start = performance.now();
    func(n);
    const end = performance.now();
    return end - start;
}

const n = 10000; 
console.log('n = ', n)
console.log("Iterative:", measureRuntime(computeSIterative, n), "ms");
console.log("Recursive (Memoized):", measureRuntime(computeSRecursiveMemoized, n), "ms");
console.log("Recursive (Naive):", measureRuntime(computeSRecursiveNaive, n), "ms");