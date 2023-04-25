- Big O Notation is a way to formalize fuzzy counting.
- It allows us to talk formally about how to the runtime of an algorithm
  grows as the inputs grow

### Big O Notation Definition

We say that an algorithm is O(f(n)) if the number of simple operations
the computer has to do is eventually less than a constant times f(n), as n increases.

- f(n) could be linear (f(n) = n) Ok
- f(n) could be quadratic(f(n) n\*\*2) Worst
- f(n) could be constant (f(n) = 1) Best
- f(n) could be something entirely different!

- O(n + 10) -> O(n)
- O(1000n + 50) -> O(n)
- O(n**2 + 5n + 8) -> O(n**2)

### Big O Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object(by key) is constant
4. In a loop, the comlexity is the length of the loop times the complexity of whatever happens inside of the loop

### Big O Examples

Big O(n)

```
function countUpAndDown(n) {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top! going down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}
```

Big O(1)

```
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

Big O(n\*\*2)

```
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```

### Space Complexity in JS

- most primitives (booleans, numbers, undefined, null) are constant Space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n) where n is the length (for arrays) or
- the number of keys(for objects).

  O(n) space

  ```
  function double (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
    }
    return new Arr;
  }
  ```

O(1) space

```
function sum(arr) {
 let total = 0;
 for (let i = 0; i < arr.length; i++) {
   total += arr[i];
 }
 return total;
}
```

### Recap

- To analyze the performance of an algorithm, we use
  Big O Notation
- Big O Notation can give us a high level understanding
  of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only
  about general trends (linear? quadratic? constant?)
- The time or space complexity (as measured by Big O)
  depends only on the algorithm, not the hardware used to run the algorithm
