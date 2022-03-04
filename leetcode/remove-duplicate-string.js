// Create a function that takes a string and returns a new string with duplicates removed. 

// const str = "This is a test test string";
// removeDuplicates(str); // "This is a test string"

function removeDuplicates(str) {
    return [... new Set(str.split(''))].join('');
}

const str = "我爱你我爱你我爱你呜呜呜呜呜";
console.log(removeDuplicates(str)); // "This is a test string"