/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        let res = "";
        let seen = {}

        for (let j = i; j < s.length; j++) {
            if (!seen[s[j]]) {
                res += s[j]
                seen[s[j]] = true
            } else {
                break
            }
        }

        if (ans.length < res.length) {
            ans = res
        }

    }

    return ans.length
};