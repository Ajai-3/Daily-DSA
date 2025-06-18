// ❓ Question: How does Selection Sort work?
// 📌 Explanation: 
// Selection Sort is a simple sorting algorithm that repeatedly selects the smallest element 
// from the unsorted part of the array and swaps it with the first unsorted element.  
// 🔹 Best case: O(n²) ✅  
// 🔹 Worst/Average case: O(n²) ❌  
// 🔹 Space complexity: O(1) (in-place sorting) 🔄  

// 🔥 Selection Sort Algorithm
let arr = [3, 7, 1, 9, 2, 7, 8, 1];  

for (let i = 0; i < arr.length; i++) {
    let m = i
    let val = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
       if (val < arr[j]) {
        val = arr[j]
         m = j
       }
    }    
    [arr[i], arr[m]] = [arr[m], arr[i]]
}

console.log(arr)

// 📌 Time Complexity:
// 🟥 Worst case  = O(n²) ❌
// 🟧 Average case = O(n²) 🔄
// 🟩 Best case = O(n²) ✅ (still O(n²) even if sorted)

// 🛠️ Space Complexity: O(1) (Sorting is done in-place) 🚀  
