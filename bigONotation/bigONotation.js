/* Time complexity*/
/*Number of operations (eventually)
is bounded by a multiple of n(say, 10n)*/
//function addUpTo(n) {
//  let total = 0;
//  for (let i = 1; i <= n; i++) {
//    total += i;
//  }
//  return total;
//}
//

/*Always 3 operations O(1)*/
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
//console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

/*Big O(n)*/
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

/*Big O(n)*/
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

//console.log(countUpAndDown(10));

/*O(n) inside an O(n) operation is O(n**2)*/
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
//console.log(printAllPairs(3));

/*Space Complexity*/
// O(1) space
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
