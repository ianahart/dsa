# Analyzing Performance of Arrays and Objects

### When To Use Objects

- When you don't need order
- When you need fast access/ insertion and removal

### Big O of Objects

- Insertion -> O(1)
- Removal -> O(1)
- Searching -> O(N)
- Access -> O(1)
- When you don't need ordering, Objects are an excellent choice

### Big O of Object methods

- Object.keys -> O(N)
- Object.values -> O(N)
- Object.entries -> O(N)
- hasOwnProperty -> 0(1)

### When To Use Arrays

- When you need order
- When you need fast access/ insertion and removal(sort of...)

### Big O Of Arrays

- Insertion - It depends...
- Removal - it depends...
- Searching - O(N)
- Access - O(1)
- When inserting and removing elements the array has to be reindexed
- push() and pop() always fast then shift() and unshift()

### Big O Of Built In Array Methods

- push - O(1)
- pop - 0(1)
- shift - 0(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N \* log N)
- forEach/map/filter/reduce/etc - O(N)
