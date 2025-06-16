// ❓ Question: How does Bubble Sort work?
// 📌 Explanation: 
// Bubble Sort is a simple sorting algorithm that repeatedly swaps adjacent elements 
// if they are in the wrong order. It continues until the array is fully sorted.  
// 🔹 Best case: Already sorted array → O(n) ✅  
// 🔹 Worst/Average case: Random order → O(n²) ❌  
// 🔹 Space complexity: O(1) (in-place sorting) 🔄  

// 🔥 Bubble Sort Algorithm
const bubbleSort = (arr) => {
    let n = arr.length;

    // 🌀 Outer loop: Runs (n-1) times
    for (let i = 0; i < n; i++) {
        // 🔄 Inner loop: Pushes the largest element to the right
        for (let j = 0; j < n - i - 1; j++) {
            // 📊 Swap if elements are in the wrong order
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 🔄 Swapping
            }
        }
    }
    return arr; // ✅ Sorted array returned
}

// 🏁 Test the function
let arr = [3, 7, 1, 9, 2, 7, 8, 1];  // 🎲 Unsorted array
console.log(bubbleSort(arr));  // 📢 Output: [1, 1, 2, 3, 7, 7, 8, 9]

// 📌 Time Complexity:
// 🟥 Worst case  = O(n²) (when array is reverse sorted) ❌
// 🟧 Average case = O(n²) (random order) 🔄
// 🟩 Best case = O(n) (already sorted, with optimized version) ✅

// 🛠️ Space Complexity: O(1) (Sorting is done in-place) 🚀
