# Layup Sequence

This repository provides an efficient implementation of the **Layup Sequence**, a recurrence relation-based sequence, along with runtime performance evaluation and optimization analysis.

---

## Layup Sequence Definition

The sequence \(S(n)\) is defined as:

$$
S(n) = 
\begin{cases} 
1 & \text{if } n = 1, \\
2 & \text{if } n = 2, \\
S(n-1) + S(n-2) & \text{if } n \text{ is even}, \\
2S(n-1) - S(n-2) & \text{if } n \text{ is odd}.
\end{cases}
$$

The goal is to compute \(S(n)\) efficiently for any given \(n\).

---

## Running It

Follow these steps to clone the repository, install dependencies, and run the program:

1. **Clone the Repository**:
   ```bash
   git clone [REPO_URL]
   cd [REPO_FOLDER]
   ```

2. **Install Dependencies**:
   Ensure you have TypeScript and `ts-node` installed globally:
   ```bash
   npm install -g typescript ts-node
   ```

3. **Run the Program**:
   Use `ts-node` to directly execute the TypeScript file:
   ```bash
   ts-node [FILENAME.ts]
   ```

---

This will execute the code, and you can observe the output in your terminal. Adjust parameters as needed to test different scenarios.
---

## Implementations

### **1. Recursive Without Memoization**
- A direct implementation of the recurrence relation.
- **Time Complexity**: \(O(2^n)\)
- **Space Complexity**: \(O(n)\)
- Highly inefficient due to redundant calculations.

### **2. Recursive With Memoization**
- Optimized by caching computed values to eliminate redundancy.
- **Time Complexity**: \(O(n)\)
- **Space Complexity**: \(O(n)\)
- Suitable for moderate values of \(n\) but fails for very large \(n\) due to stack overflow.

### **3. Iterative Implementation**
- The most efficient approach using a loop and \(O(1)\) space.
- **Time Complexity**: \(O(n)\)
- **Space Complexity**: \(O(1)\)
- Scales well even for very large \(n\).

---

## Performance Evaluation

### Runtime Comparison

Below is a table comparing the execution times of the different implementations:

| **n (Input Size)** | **Recursive (Naive) (ms)** | **Recursive (Memoized) (ms)** | **Iterative (ms)** |
|---------------------|----------------------------|-------------------------------|--------------------|
| 10                 | 0.3311                    | 0.1184                        | 0.0707            |
| 20                 | 1.4051                    | 0.1891                        | 0.3373            |
| 50                 | No Result                 | 0.2105                        | 0.2994            |
| 100                | No Result                 | 0.2476                        | 0.3046            |
| 1000               | No Result                 | 0.9169                        | 0.4094            |
| 10000              | No Result                 | Stack Overflow                | 0.7355            |

### Performance Graph

Below is a visual comparison of the runtime performance for each implementation:

![Results](/layup_sequence_performance.png)

---

## Further Optimizations

For very large \(n\), the Layup Sequence can be computed even more efficiently using **matrix exponentiation**. This method reduces the time complexity to \(O(\log n)\) by representing the recurrence relation in matrix form and applying exponentiation by squaring. Matrix exponentiation is the most efficient solution, especially for extremely large inputs.

---

## Conclusion

- The **iterative implementation** is the recommended approach due to its optimal time complexity \(O(n)\) and space complexity \(O(1)\).
- Recursive implementations are suitable for smaller inputs, with memoization significantly improving performance over naive recursion.
- For extremely large \(n\), matrix exponentiation can provide \(O(\log n)\) performance and should be explored for further optimization.