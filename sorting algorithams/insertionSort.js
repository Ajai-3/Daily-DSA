// ❓ Question: How does Insertion Sort work?
// 📌 Explanation: 
// Insertion Sort builds a sorted array one element at a time by inserting each element  
// into its correct position relative to the already sorted part.  
// 🔹 Best case: O(n) ✅ (when the array is already sorted)  
// 🔹 Worst/Average case: O(n²) ❌  
// 🔹 Space complexity: O(1) (in-place sorting) 🔄  

// 🔥 Insertion Sort Algorithm
const insertionSort = (arr) => {
    let n = arr.length;

    // 🌀 Outer loop: Iterate through each element, considering it for insertion
    for (let i = 1; i < n; i++) {
        let key = arr[i]; // ✅ The current element to be placed correctly
        let j = i - 1;

        // 🔄 Inner loop: Move elements that are greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // 🔃 Shift elements to the right
            j--;
        }

        arr[j + 1] = key; // 📌 Insert key at the correct position
    }

    return arr; // ✅ Sorted array returned
}

// 🏁 Test the function
let arr = [3, 7, 1, 9, 2, 7, 8, 1];  // 🎲 Unsorted array
console.log(insertionSort(arr));  // 📢 Output: [1, 1, 2, 3, 7, 7, 8, 9]

// 📌 Time Complexity:
// 🟥 Worst case  = O(n²) ❌
// 🟧 Average case = O(n²) 🔄
// 🟩 Best case = O(n) ✅ (when already sorted)

// 🛠️ Space Complexity: O(1) (Sorting is done in-place) 🚀  
