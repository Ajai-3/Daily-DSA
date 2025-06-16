// ❓ Question: How does Merge Sort work?
// 📌 Explanation: 
// Merge Sort is a **divide and conquer** sorting algorithm. It divides the array into smaller subarrays, 
// sorts them recursively, and merges them back together in sorted order.
// 🔹 Best case: O(n log n) ✅  
// 🔹 Worst/Average case: O(n log n) ✅  
// 🔹 Space complexity: O(n) (extra space for merging) 🛠️  

// 🔥 Merge Sort Algorithm
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr; // ✅ Base case: Already sorted

    let mid = Math.floor(arr.length / 2); // ✂️ Divide the array
    let left = mergeSort(arr.slice(0, mid)); // 🔄 Sort left half
    let right = mergeSort(arr.slice(mid));   // 🔄 Sort right half

    return merge(left, right); // 🔀 Merge sorted halves
}

// 🔄 Merge Function: Merges two sorted arrays
const merge = (left, right) => {
    let result = [];
    let i = 0, j = 0;

    // 🌀 Compare elements from left and right arrays
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++; // ✅ Move left pointer
        } else {
            result.push(right[j]);
            j++; // ✅ Move right pointer
        }
    }

    // 📌 Add remaining elements (if any)
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// 🏁 Test the function
let arr = [3, 7, 1, 9, 2, 7, 8, 1];  // 🎲 Unsorted array
console.log(mergeSort(arr));  // 📢 Output: [1, 1, 2, 3, 7, 7, 8, 9]

// 📌 Time Complexity:
// 🟩 Best case = O(n log n) ✅
// 🟧 Average case = O(n log n) ✅
// 🟥 Worst case  = O(n log n) ✅

// 🛠️ Space Complexity: O(n) (Extra space for merging) 🚀
