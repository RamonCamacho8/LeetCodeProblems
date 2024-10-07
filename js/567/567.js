/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 
 */
var checkInclusion = function(s1, s2) {
    const s1Len = s1.length;
    const s2Len = s2.length;
    
    if (s1Len > s2Len) {
        return false;
    }

    /**
     * 
     * @param {Map} map1
     * @param {Map} map2
     * @return {boolean}
     * 
     */
    const isSameMap = (map1, map2) => {
  
    
        for (let [key, value] of map1) {
            if (map2.get(key) !== value) {
                return false;
            }
        }
        return true;

    } 

    const s1Map = new Map();
    const s2Map = new Map();

    for (let i = 0; i < s1Len; i++) {
        s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
        s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);

    }

    if(isSameMap(s1Map, s2Map)) return true;

    for (let i = s1Len; i < s2Len; i++) {
        s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
        s2Map.set(s2[i - s1Len], s2Map.get(s2[i - s1Len]) - 1);

        if(isSameMap(s1Map, s2Map)) return true;
    }

    return false;
  
};

const s1 = "ab"; 
const s2 = "eidbaoo";

console.log(checkInclusion(s1,s2));