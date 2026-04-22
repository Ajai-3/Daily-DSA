/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {}
    let mapT = {}

    for (let i = 0; i < s.length; i++) {
        let charS = s[i]
        let charT = t[i]

        if (mapS[charS] !== undefined && mapS[charS] !== charT) return false
        if (mapT[charT] !== undefined && mapT[charT] !== charS) return false

        mapS[charS] = charT
        mapT[charT] = charS
    }

    return true
};