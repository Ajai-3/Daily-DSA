// ❓ Question: How does Selection Sort work?
// 📌 Explanation: 
// Selection Sort is a simple sorting algorithm that repeatedly selects the smallest element 
// from the unsorted part of the array and swaps it with the first unsorted element.  
// 🔹 Best case: O(n²) ✅  
// 🔹 Worst/Average case: O(n²) ❌  
// 🔹 Space complexity: O(1) (in-place sorting) 🔄  

// 🔥 Selection Sort Algorithm
const selectionSort = (arr) => {
    let n = arr.length;

    // 🌀 Outer loop: Moves the boundary of the sorted part
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // ✅ Assume the first element is the smallest

        // 🔄 Inner loop: Find the smallest element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // 🔍 Update minIndex if a smaller element is found
            }
        }

        // 📊 Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // 🔄 Swapping
        }
    }

    return arr; // ✅ Sorted array returned
}

// 🏁 Test the function
let arr = [3, 7, 1, 9, 2, 7, 8, 1];  // 🎲 Unsorted array
console.log(selectionSort(arr));  // 📢 Output: [1, 1, 2, 3, 7, 7, 8, 9]

// 📌 Time Complexity:
// 🟥 Worst case  = O(n²) ❌
// 🟧 Average case = O(n²) 🔄
// 🟩 Best case = O(n²) ✅ (still O(n²) even if sorted)

// 🛠️ Space Complexity: O(1) (Sorting is done in-place) 🚀  
