/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {

    const string_array = s.split("");
    const substrings = ["AB", "CD"];

    for (let i = 0; i < string_array.length; i++) {
        
        const substring = string_array[i] + string_array[i + 1];
        if(substring === substrings[0] || substring === substrings[1]) {
            string_array.splice(i, 2);
            i = -1;
        }
    }

    

    return string_array.length;

};



minLength("ABFCACDB")