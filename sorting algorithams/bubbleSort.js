// ❓ Question: How does Bubble Sort work?
// 📌 Explanation: 
// Bubble Sort is a simple sorting algorithm that repeatedly swaps adjacent elements 
// if they are in the wrong order. It continues until the array is fully sorted.  
// 🔹 Best case: Already sorted array → O(n) ✅  
// 🔹 Worst/Average case: Random order → O(n²) ❌  
// 🔹 Space complexity: O(1) (in-place sorting) 🔄  

// 🔥 Bubble Sort Algorithm
let arr = [1, 4, 6, 8, 2, 3]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}

console.log(arr)

// 📌 Time Complexity:
// 🟥 Worst case  = O(n²) (when array is reverse sorted) ❌
// 🟧 Average case = O(n²) (random order) 🔄
// 🟩 Best case = O(n) (already sorted, with optimized version) ✅

// 🛠️ Space Complexity: O(1) (Sorting is done in-place) 🚀
