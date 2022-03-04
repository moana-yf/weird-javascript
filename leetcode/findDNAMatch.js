const s2 = "ATCGATCG";
const s1 = "GC";

function findDNAMatch(s1, s2, start = 0) {

    let pointer1 = 0;
    let pointer2 = 0;

    const complement = s2.split("").map((base) => {
        if (base === "A") return "T";
        else if (base === "T") return "A";
        else if (base === "C") return "G";
        else if (base === "G") return "C";
    });
    
    const toAttach = s1.split("");

    while (pointer1 <= complement.length) {
        // if not match, pointer1 increases, pointer2 stays
        // if match, both advances. 
        // when pointer2 === toAttach.length, loop stops, return pointer1;
        // if pointer1 reaches maximum first, return -1, meaning no match. 
        
        if (pointer1 === complement.length) {
            return -1; 
        }

        if (pointer2 === toAttach.length) {
            return pointer1 - toAttach.length;
        }

        if (!isMatch(complement[pointer1], toAttach[pointer2])) {
            pointer1 += 1;
            pointer2 = 0
        }

        if (isMatch(complement[pointer1], toAttach[pointer2])) {
            pointer1 += 1;
            pointer2 += 1;
        }
    }
}

function isMatch(base1, base2) {
    const table = {"A": 1, "T": 3, "C": 2, "G": 2,};
    if (table[base1] + table[base2] === 4) {
        return true;
    }
    return false;
}

console.log(findDNAMatch(s1, s2, 0));