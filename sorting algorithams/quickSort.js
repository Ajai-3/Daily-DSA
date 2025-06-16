// ❓ Question: How does Quick Sort work?
// 📌 Explanation:
// Quick Sort is a divide-and-conquer algorithm that picks a pivot, partitions the array,  
// and recursively sorts the subarrays.  
// 🔹 Best/Average case: O(n log n) ✅  
// 🔹 Worst case: O(n²) ❌ (if pivot selection is poor)  
// 🔹 Space complexity: O(log n) (due to recursion stack) 🔄  

// 🔥 Quick Sort Algorithm
function quickSort(arr) {
    if (arr.length <= 1) return arr; // ✅ Base case: return if only one or zero elements

    const pivotIndex = Math.floor(arr.length / 2); // 📌 Choosing the middle element as pivot
    const pivot = arr[pivotIndex]; // 🎯 Pivot element
    const left = []; // 🏗️ Left partition (elements smaller than pivot)
    const right = []; // 🏗️ Right partition (elements greater than or equal to pivot)

    // 🔄 Partitioning step: Place elements into left or right array
    for (let i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) { // ✅ Skip the pivot itself
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]); // 📌 Sorting into partitions
        }
    }

    // 🔄 Recursively apply Quick Sort on partitions and merge the results
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 🏁 Test the function
const array = [3, 6, 8, 10, 1, 2, 1]; // 🎲 Unsorted array
console.log(quickSort(array)); // 📢 Output: [1, 1, 2, 3, 6, 8, 10]

// 📌 Time Complexity:
// 🟩 Best case = O(n log n) ✅ (balanced partitioning)
// 🟧 Average case = O(n log n) 🔄
// 🟥 Worst case  = O(n²) ❌ (bad pivot choice, e.g., already sorted array)

// 🛠️ Space Complexity: O(log n) (Recursive calls) 🚀  
