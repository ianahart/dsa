# Recursion

### What is Recursion?

A process (a function in our case) that calls itself.

### The Call Stack

- It's a **stack** data structure
- Any time a function is invoked it is placed (pushed) on
  top of the call stack
- When JavaScript sees the return keyword or when the function
- ends, the compiler will remove(pop)
- When we write recursive functions, we keep pushing new functions onto the call stack.

#### Two Essential Parts of a Recursive function

- Base Case
- Different Input

#### Our First Recursive Function

```
function countDown(num) {
    if (num <= 0) {
        console.log('All Done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

#### Our Second Recursive Function

```
    function sumRange(num) {
        if (num ===1) {
        return 1;
        }
        return num + sumRange(num -1);
    }
```

### Pure Recursion Tips

- For arrays, use methods like slice, the spread operator, and concat that makes
  copies of arrays so you do not mutate them.
- Remember that string are immutable so you will need to use methods like slice,
  substr, or substring to make copies of strings.
- To make copies of objects use Object.assign, or the spread operator
