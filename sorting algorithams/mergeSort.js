// ❓ Question: How does Merge Sort work?
// 📌 Explanation: 
// Merge Sort is a **divide and conquer** sorting algorithm. It divides the array into smaller subarrays, 
// sorts them recursively, and merges them back together in sorted order.
// 🔹 Best case: O(n log n) ✅  
// 🔹 Worst/Average case: O(n log n) ✅  
// 🔹 Space complexity: O(n) (extra space for merging) 🛠️  

// 🔥 Merge Sort Algorithm
const mergeSort = (arr) => {
   if (arr.length <= 1) return arr
   let mid = Math.floor(arr.length / 2)
   let left = mergeSort(arr.slice(0, mid))
   let right  = mergeSort(arr.slice(mid))

   return merge(left, right)
}

const merge = (left, right) => {
    let sorted = []
    while(left.length && right.length) {
        sorted.push(left[0] > right[0] ? left.shift() : right.shift())
    }
    return sorted.concat(left, right)
  
}


let arr = [3, 7, 1, 9, 2, 7, 8, 1];  // 🎲 Unsorted array
console.log(mergeSort(arr));  // 📢 Output: [1, 1, 2, 3, 7, 7, 8, 9]

// 📌 Time Complexity:
// 🟩 Best case = O(n log n) ✅
// 🟧 Average case = O(n log n) ✅
// 🟥 Worst case  = O(n log n) ✅

// 🛠️ Space Complexity: O(n) (Extra space for merging) 🚀
