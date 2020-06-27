1. O(1) -- the person yelling will always get a reply without having to access each person individually
O(n) -- the person is asking every single person 1-by-1 if they have a golden retriever, it is dependent on the amount of people in the room


```
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```
2. The above is O(1). It will perform the same 2 operations for any integer input
```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```
3. The above is O(n^2). It features a nested loop dependent on the two array lengths

```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```
1. The above is O(n). The amount of operations is dependent on the length of the array

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```
5. The above is O(n). The amount of operations is dependent on the length of the array

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

```
6. The above is O(n^2). It relies on a nested loop dependent on the length of the array input

```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```
7. Fibonacci sequence, and this is O(n) since this is dependent on the size of the input integer

```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```
8. The above is O(log(n)), as the number of operations required is cut by about half on every iteration

```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```
9. The above is O(1), as it will only perform a set number of operations on any given input size


```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```
10. Calculate if a given number is a prime number. O(n), due to the loop that will iterate until it can return. This will run at the worst case for the largest prime number.

```
function hanoiTower(disk, start, end, intermediate) {
    if(disk === 1) {
        console.log(`Move ${disk} from ${start} to ${end}`)
        return
    }
    else {
        hanoiTower(disk - 1, start, intermediate, end)
        console.log(`Move ${disk} from ${start} to ${end}`)
        hanoiTower(disk - 1, intermediate, end, start)
    }
}
```
11. Rod 1 will have disks 4 and 5, and rod 3 will have disks 3, 2, 1
With 3 disks, it will take 7 moves,
With 4 disks, it will take 15 moves,
with 5, it will take 31 moves
Run time is O(2^n)


12. See Iterative Versions.js
13. See Recursive Versions.js
14. See Iterative Versions.js