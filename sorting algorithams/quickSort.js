// ❓ Question: How does Quick Sort work?
// 📌 Explanation:
// Quick Sort is a divide-and-conquer algorithm that picks a pivot, partitions the array,  
// and recursively sorts the subarrays.  
// 🔹 Best/Average case: O(n log n) ✅  
// 🔹 Worst case: O(n²) ❌ (if pivot selection is poor)  
// 🔹 Space complexity: O(log n) (due to recursion stack) 🔄  

// 🔥 Quick Sort Algorithm
function quickSort(arr) {
    if (arr.length <= 0) return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === pivot) continue
        
        if (pivot > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array));

// 📌 Time Complexity:
// 🟩 Best case = O(n log n) ✅ (balanced partitioning)
// 🟧 Average case = O(n log n) 🔄
// 🟥 Worst case  = O(n²) ❌ (bad pivot choice, e.g., already sorted array)

// 🛠️ Space Complexity: O(log n) (Recursive calls) 🚀  
